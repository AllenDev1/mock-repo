from django.contrib import admin
from .models import Blog_Category, Blog

# Register your models here.
admin.site.register(Blog_Category)

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ['title', 'Body', 'created_by', 'created_at']
    fields = ['title', 'body', 'blog_category', 'blog_image','created_by']

    def Body(self, obj):
        return f'{obj.body[:30]}...........'