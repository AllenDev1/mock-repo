from rest_framework import serializers
from .models import *

class Blog_serializer(serializers.ModelSerializer):
    blog_categories = serializers.StringRelatedField(source='blog_category', many = True)
    created_by = serializers.StringRelatedField(source='created_by.get_full_name')
    class Meta:
        model = Blog
        fields = ['title', 'body','blog_categories', 'blog_image', 'created_by', 'created']

class Blog_Helpful(serializers.ModelSerializer):
    blog = serializers.StringRelatedField(source='blog.title')
    class Meta:
        model = BlogHelpful
        fields = ['blog', 'helpful', 'created_at']
        
