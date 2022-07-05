from django.db import models
from ads.models import Ads
from django.contrib.auth import get_user_model
User = get_user_model()


# Create your models here.
class Comments(models.Model):
    COMMENT_TYPE = (
        ('ROOT', 'MAIN COMMENT'),
        ('SUBC', 'REPLY COMMENT')
    )
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.PROTECT)
    type = models.CharField(max_length=6, null=False, blank=False, choices=COMMENT_TYPE, default="ROOT")
    user_comment = models.TextField(null=False, max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ads = models.ForeignKey(Ads, null=False, blank=False, on_delete=models.CASCADE, default='1')
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user_comment}"

    class Meta:
        ordering = ("-created_at",)
        verbose_name = "comment"
        verbose_name_plural = "comments"

