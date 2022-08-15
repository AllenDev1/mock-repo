from django.contrib import admin
from .models import Blog

# Register your models here.
@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ['title', 'body', 'blog_type', 'created_by', 'created_at']
    fields = ['title', 'body', 'blog_type', 'blog_image','created_by']

    def body(self, obj):
        return obj.body[:30]