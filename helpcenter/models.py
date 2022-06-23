from django.db import models


class HelpCenter(models.Model):
    full_name = models.CharField(max_length=20, db_index=True, blank=False)
    email_phone = models.CharField(max_length=100, db_index=True, blank=False)
    category = models.CharField(max_length=100, db_index=True, blank=False)
    message = models.TextField(max_length=500, db_index=True, blank=False)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'message from ' + self.full_name + ' with id =' + str(self.id) + ''

    class Meta:
        ordering = ("-created_date",)
