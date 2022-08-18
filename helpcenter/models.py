from django.db import models
from django.conf import settings
from tinymce.models import HTMLField

class Faq(models.Model):
    CATEGORIES = (
        ('BUYER','buyer faqs'),
        ('SELLER','seller faqs'),
        ('GENERAL','general faqs'),
        ('TRUST','trust & safety')
    )
    question = models.CharField(max_length=100)
    answer = models.TextField()
    type = models.CharField(max_length=7, null=False, blank=False, choices=CATEGORIES, default="buyer")
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.question}"

    class Meta:
        ordering = ("-created_at",)


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


class HelpCenter(models.Model):
    CATEGORIES = (
        ('BUYER', 'buyer faqs'),
        ('SELLER', 'seller faqs'),
        ('GENERAL', 'general faqs'),
        ('TRUST', 'trust & safety')
    )
    full_name = models.CharField(max_length=20, db_index=True, blank=False)
    email_phone = models.CharField(max_length=100, db_index=True, blank=False)
    category = models.CharField(max_length=100, db_index=True, blank=False,choices=CATEGORIES, default="buyer")
    message = models.TextField(max_length=500, db_index=True, blank=False)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'message from ' + self.full_name + ' with id =' + str(self.id) + ''

    class Meta:
        ordering = ("-created_date",)
