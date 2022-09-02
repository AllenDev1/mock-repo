from dataclasses import field
from rest_framework import serializers
from .models import *


class CarrerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrer
        field = ['id','title', 'job_type', 'no_of_roles', 'location', 'description']



class ApplicantSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplicants
        field = ['first_name', 'last_name', 'email', 'phone_number', 'address', 'resume', 'linkedin']
        