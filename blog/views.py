from django.shortcuts import render
from .models import Blog
from .serializers import Blog_serializer
from rest_framework import viewsets, permissions

# Create your views here.
class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = Blog_serializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly or permissions.IsAdminUser]
    http_method_names = ['get']