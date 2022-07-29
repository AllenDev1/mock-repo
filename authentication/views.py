from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.urls import reverse
import urllib
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import redirect

from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.hashers import make_password
from rest_framework.utils import json
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model

User = get_user_model()


class GoogleConnect(SocialLoginView):
    client_class = OAuth2Client
    adapter_class = GoogleOAuth2Adapter
    callback_url = "http://127.0.0.1:8000/auth/google/callback/"

    @property
    def callback_url(self):
        return self.request.build_absolute_uri(reverse('google_callback'))


def google_callback(request):
    params = urllib.parse.urlencode(request.GET)

    return redirect(f'http://localhost:3000/google/{params}')


# @csrf_exempt
# def google_token(request):
#     if "code" not in request.body.decode():
#         from rest_framework_simplejwt.settings import api_settings as jwt_settings
#         from rest_framework_simplejwt.views import TokenRefreshView
#
#         class RefreshNuxtAuth(TokenRefreshView):
#             # By default, Nuxt auth accept and expect postfix "_token"
#             # while simple_jwt library doesnt accept nor expect that postfix
#             def post(self, request, *args, **kwargs):
#                 request.data._mutable = True
#                 request.data["refresh"] = request.data.get("refresh_token")
#                 request.data._mutable = False
#                 response = super().post(request, *args, **kwargs)
#                 response.data['refresh_token'] = response.data['refresh']
#                 response.data['access_token'] = response.data['access']
#                 return response
#
#         return RefreshNuxtAuth.as_view()(request)
#
#     else:
#         return GoogleConnect.as_view()(request)


class GoogleView(APIView):
    def post(self, request, *args, **kwargs):
        url = "https://www.googleapis.com/oauth2/v1/userinfo"
        payload = ""
        actok = request.data.get("token")
        tok = f"bearer {actok}"
        headers = {"Authorization": tok, 'Content-Type': 'application/json'}
        querystring = {'access_token': request.data.get("token")}
        print(querystring["access_token"])
        r = requests.request("GET", url, headers=headers, params=querystring)
        print(r.text)
        data = json.loads(r.text)

        if 'error' in data:
            content = {'message': 'wrong google token / this google token is already expired.'}
            return Response(content)

        try:
            user = User.objects.get(email=data['email'])



        except User.DoesNotExist:
            user = User()
            user.email = data['email']
            # provider ramdom default password
            user.password = make_password(BaseUserManager().make_random_password())
            user.save()

        token = RefreshToken.for_user(user)
        response = {}
        response['username'] = user.username
        response['access_token'] = str(token.access_token)
        response['refresh_token'] = str(token)
        return Response(response)


class LogView(APIView):
    def post(self, request, *args, **kwargs):
        #     payload = {'access_token': request.data.get("token")}
        #     r = requestg.get("https://www/googleapis.com/oauth2/v2/userinfo", params=payload)
        #     data = json.loads(r.text)
        #
        #     if 'error' in data:
        #         content = {'message': 'wrong google token / this google token is already expired.'}
        #         return Response(content)

        try:

            user = User.objects.get(email=request.data.get("email"))
            token = RefreshToken.for_user(user)
            response = {}
            response['email'] = user.email
            response['access_token'] = str(token.access_token)
            response['refresh_token'] = str(token)
            response['msg'] = str('this is from try block.')
            return Response(response)
            # except User.DoesNotExist:
            #     user = User()
            #     user.email = data['email']
            #     # provider ramdom default password
            #     user.password = make_password(BaseUserManager().make_random_password())
            #     user.save()
        except User.DoesNotExist:
            res = {}
            user = User()
            user.email = request.data.get("email")
            # provider ramdom default password
            user.password = make_password(BaseUserManager().make_random_password())
            user.save()
            res['email'] = user.email
            res['msg'] = str('this user was created in except block.')
            return Response(res)


def google_login(request):
    return redirect(
        f'https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile&include_granted_scopes=true&response_type=token&state=zcb0vznXDbUN&redirect_uri=http://127.0.0.1:8000/auth/google/callback/&client_id=287459121347-kbpsu3dm75tk1dgof2m9qrtfg6e7cg1n.apps.googleusercontent.com')
