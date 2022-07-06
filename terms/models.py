from django.db import models
from django.conf import settings
# from ckeditor.fields import RichTextField
from tinymce.models import HTMLField


class Terms(models.Model):
    CATEGORIES = (
        ('PRIVACY', 'privacy'),
        ('TERMS', 'terms of use'),
        ('COMMUNITY_TERMS', 'community terms')
    )
    title = models.CharField(max_length=100)
    description = HTMLField(blank=True, null=True)
    type = models.CharField(max_length=15, null=False, blank=False, choices=CATEGORIES, default="terms")
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title}"

    class Meta:
        ordering = ("-created_at",)
        verbose_name = "Term"
        verbose_name_plural = "Terms"
