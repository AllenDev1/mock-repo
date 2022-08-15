from distutils.command.upload import upload
from django.db import models

# Create your models here.
class Carrer(models.Model):
    TYPE = (
        ('INTERN', 'intern'),
        ('JUNIOR', 'junior'),
        ('MID-SENIOR', 'mid-senior'),
        ('SENIOR', 'senior'),
        ('EXECUTIVE', 'executive'),
        ('DIRECTOR', 'director')
    )
    title = models.CharField(max_length=40, null=False, blank=False)
    job_type = models.CharField(max_length=30, null=False, blank=False, choices=TYPE)
    no_of_roles = models.IntegerField(null=False, blank=False)
    location = models.CharField(max_length=40, null=False, blank=False)
    description = models.TextField()

    def __str__(self):
        return self.title

class JobApplicants(models.Model):
    first_name = models.CharField(max_length=50, null=False, blank=False)
    last_name = models.CharField(max_length=50, null=False, blank=False)
    email = models.EmailField(verbose_name='email address', null=False, blank=False, max_length=50)
    phone_number = models.IntegerField(null=False, blank=False)
    address = models.CharField(max_length=50, null=False, blank=False)
    resume = models.ImageField(upload_to='images/resumes')
    linkedin = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.first_name
