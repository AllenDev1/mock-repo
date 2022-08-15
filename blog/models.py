from django.db import models
from django.conf import settings

# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length= 30, null=False, blank= False)
    body = models.TextField(null=False, blank=False)
    blog_type = models.CharField(max_length=30, null=False, blank=False)
    blog_image = models.ImageField(upload_to="images/blog_images")
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    