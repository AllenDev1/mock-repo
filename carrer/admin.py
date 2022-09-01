from django.contrib import admin
from .models import *

# Register your models here.


@admin.register(Carrer)
class CarrerAdmin(admin.ModelAdmin):
    list_display = ['title', 'job_type', 'no_of_roles', 'location', 'Body']
    fields = ['title', 'job_type', 'no_of_roles', 'location', 'description' ]

    def Body(self, obj):
        if len(obj.description) > 30:
            return f'{obj.description[:30]}...........'
        else:
            return obj.description


@admin.register(JobApplicants)
class JobApplicantsAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'email', 'phone_number', 'address', 'resume', 'linkedin']
    fields = ['first_name', 'last_name', 'email', 'phone_number', 'address', 'resume', 'linkedin']

    def has_add_permission(self, request):
        return False