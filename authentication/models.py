from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .models_managers import CustomUserManager
from tempfile import NamedTemporaryFile
from django.core.files import File
from urllib.request import urlopen

class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(_('email address'), max_length=100, unique=True, null=True, blank=True)
    first_name = models.CharField(max_length=100, blank=True, null= True )
    last_name = models.CharField(max_length=100, blank=True, null= True)
    image = models.ImageField(upload_to='images', default='default/default user.jpeg')
    image_url = models.URLField(null=True, default=None)
    number = models.IntegerField(null=True, blank=True)
    about = models.TextField(max_length=500, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField("IS ACTIVE", default=True)
    login_status = models.BooleanField("IS LOGIN", default=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    def created(self):
        date = self.created_at.strftime("%B %d,%Y")
        return date

    @property
    def get_full_name(self):
        full_name = f"{self.first_name} {self.last_name}"
        return full_name.strip()

    class Meta:
        db_table = 'system_users'
    
    def save(self, *args, **kwargs):
        if self.image_url and not self.image:
            img_temp = NamedTemporaryFile(delete=True)
            img_temp.write(urlopen(self.image_url).read())
            img_temp.flush()
            self.image.save(f"image_{self.id}", File(img_temp))
        super(CustomUser, self).save(*args, **kwargs)
