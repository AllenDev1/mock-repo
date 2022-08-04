import hashlib
from django.dispatch import receiver
from .models import CustomUser

from allauth.account.signals import user_signed_up, user_logged_in


@receiver(user_signed_up)
def social_login_fname_lname_profilepic(sociallogin, CustomUser):
    preferred_avatar_size_pixels = 256

    social_pic = "http://www.gravatar.com/avatar/{0}?s={1}".format(
        hashlib.md5(CustomUser.email.encode('UTF-8')).hexdigest(),
        preferred_avatar_size_pixels
    )

    if sociallogin:
        # Extract first / last names from social nets and store on User record
        # if sociallogin.account.provider == 'twitter':
        #     name = sociallogin.account.extra_data['name']
        #     user.first_name = name.split()[0]
        #     user.last_name = name.split()[1]
        print("Social login signal activated !!!")

        if sociallogin.account.provider == 'facebook':
            f_name = sociallogin.account.extra_data['first_name']
            l_name = sociallogin.account.extra_data['last_name']
            if f_name:
                CustomUser.first_name = f_name
            if l_name:
                CustomUser.last_name = l_name

            # verified = sociallogin.account.extra_data['verified']
            social_pic = "http://graph.facebook.com/{0}/picture?width={1}&height={1}".format(
                sociallogin.account.uid, preferred_avatar_size_pixels)

        if sociallogin.account.provider == 'google':
            f_name = sociallogin.account.extra_data['given_name']
            l_name = sociallogin.account.extra_data['family_name']
            if f_name:
                CustomUser.first_name = f_name
            if l_name:
                CustomUser.last_name = l_name
            email_verified = sociallogin.account.extra_data['verified_email']
            social_pic = sociallogin.account.extra_data['picture']

    CustomUser.image = social_pic
    CustomUser.save()
