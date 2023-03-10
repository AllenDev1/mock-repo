from ast import Return
from rest_framework.response import Response
from rest_framework.filters import SearchFilter
from rest_framework import viewsets, permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .serializer import *
import random
import time
import threading
from django.contrib.auth import get_user_model

User = get_user_model()


class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows category to be viewed
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly or permissions.IsAdminUser]
    http_method_names = ['get']


class MainCategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows category to be viewed
    """
    queryset = Main_Category.objects.all()
    serializer_class = MainCategorySerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly or permissions.IsAdminUser]
    http_method_names = ['get']


class SubCategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows category to be viewed
    """
    queryset = Sub_Category.objects.all()
    serializer_class = SubCategorySerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly or permissions.IsAdminUser]
    http_method_names = ['get']


class FilterCategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows category to be viewed
    """
    queryset = Filter_Category.objects.all()
    serializer_class = FilterCategorySerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly or permissions.IsAdminUser]
    http_method_names = ['get']


class SubFilterCategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows category to be viewed
    """
    queryset = Sub_Filter_Category.objects.all()
    serializer_class = SubFilterCategorySerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly or permissions.IsAdminUser]
    http_method_names = ['get']


class TreeCategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Treecategory to be viewed
    """
    queryset = Category.objects.filter(parent=None)
    serializer_class = TreeCategorySerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly or permissions.IsAdminUser]
    http_method_names = ['get']


class RootCategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Rootcategory to be viewed
    """
    queryset = Category.objects.filter(parent=None)
    serializer_class = RootCategorySerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly or permissions.IsAdminUser]
    http_method_names = ['get']


class AdsViewSet(viewsets.ModelViewSet):
    """
    API endpoint for ads
    """
    queryset = Ads.objects.all()
    serializer_class = AdsSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [SearchFilter]
    search_fields = ['category__name', 'category__parent__name',
                     'category__parent__parent__name']

    class Meta:
        ordering = ['-id']

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.ad_views = instance.ad_views + 1
        instance.save()
        # view_thread = threading.Thread(target=ad_view)
        # view_thread.start()
        # add_view = ad_view(instance)
        return super().retrieve(request, *args, **kwargs)


# def ad_view(instance):
#     time.sleep(2)
#     instance.ad_views = instance.ad_views + 1
#     instance.save()


class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    permission_classes = [permissions.AllowAny]
    http_method_names = ['post']


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getLoggedInUser(request):
    return Response({
        "email": request.user.email,
        "id": request.user.id,
        "first_name": request.user.first_name,
        "last_name": request.user.last_name,
        "image": request.user.image.url,
        "full_name": request.user.get_full_name,
        "about": request.user.about
    })


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint for users
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    http_method_names = ['get']

    def list(self, request):
        msg = 'You are not allowed to access this information.'
        return Response(msg)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        return super().retrieve(request, *args, **kwargs)


class AdsByCategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = AdsByCategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class AdsByUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = AdsByUserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class MyAdsViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving logined user ads.
    """

    def list(self, request):
        print(request.user.id)
        queryset = Ads.objects.filter(id=request.user.id)
        serializer = AdsSerializer(queryset, many=True)
        return Response(serializer.data)


class DeactiveUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(is_active=False)
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class FavAdsViewSet(viewsets.ModelViewSet):
    queryset = FavAds.objects.all()
    serializer_class = FavAdsSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[-1].strip()
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip
