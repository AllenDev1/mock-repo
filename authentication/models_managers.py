from django.contrib.auth.base_user import BaseUserManager
# from django.utils.translation import ugettext_lazy as _


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            is_active=True

        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def update_user(self, user, password=None, is_active=True):
        user.is_active = is_active
        if password:
            user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password):
        """
        Creates and saves a superuser with the given email and password
        """
        user = self.create_user(
            email,
            password=password,
        )
        user.is_staff = True
        user.is_active = True
        user.is_superuser = True
        user.save(using=self._db)
        return user
