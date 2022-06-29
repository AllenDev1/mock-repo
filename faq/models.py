from django.db import models
from django.conf import settings


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
