from webbrowser import get
from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework import viewsets, permissions

# Create your views here.
class CarrerViewSet(viewsets.ModelViewSet):
    queryset = Carrer.objects.all()
    serializer_class = CarrerSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    http_method_names = ['get']

class ApplicantViewSet(viewsets.ModelViewSet):
    queryset = JobApplicants.objects.all()
    serializer_class = ApplicantSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    http_method_names = ['post']