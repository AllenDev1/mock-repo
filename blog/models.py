from unicodedata import category
from django.db import models
from django.conf import settings
from tinymce.models import HTMLField

# Create your models here.
class Blog_Category(models.Model):
    category_name = models.CharField(max_length=40, null=False, blank=False)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.category_name
    
    class Meta:
        ordering = ("-created_at",)
        verbose_name = "Blog_category"
        verbose_name_plural = "Blog_categories"

class Blog(models.Model):
    title = models.CharField(max_length= 30, null=False, blank= False)
    body = HTMLField(blank=True, null=True)
    blog_category = models.ManyToManyField(Blog_Category)
    blog_image = models.ImageField(upload_to="images/blog_images")
    image_caption = models.CharField(max_length=100, null=True, blank=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def created(self):
        date = self.created_at.strftime("%B %d,%Y")
        return date

class BlogHelpful(models.Model):
    OPTIONS = (
        ('YES', 'yes'),
        ('NO', "no")
    )
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    helpful = models.CharField(max_length=3, choices=OPTIONS)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.blog.title


