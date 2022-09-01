from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Applink(models.Model):
    DATA = (
        ('VIBER', 'viber'),
        ('WHATSAPP', 'whatsapp')
    )
    user = models.ForeignKey(User, null=False, blank=False, on_delete=models.CASCADE)
    app = models.CharField(max_length=20, choices=DATA, null=False, blank=False)
    number = models.IntegerField(null=False, blank=False)

    def __str__(self):
        return f" {self.user.email} - {self.app}"
