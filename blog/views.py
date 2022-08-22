from django.shortcuts import render
from .models import Blog, BlogHelpful
from .serializers import Blog_serializer, Blog_Helpful
from rest_framework import viewsets, permissions

# Create your views here.
class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = Blog_serializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly or permissions.IsAdminUser]
    http_method_names = ['get']

class BlogHelpfulViewSet(viewsets.ModelViewSet):
    queryset = BlogHelpful.objects.all()
    serializer_class = Blog_Helpful
    permission_classes = [permissions.AllowAny]
    http_method_names = ['get']