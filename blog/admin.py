from django.contrib import admin
from .models import Blog_Category, Blog, BlogHelpful

# Register your models here.
admin.site.register(Blog_Category)

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ['title', 'Body', 'created_by', 'created_at']
    fields = ['title', 'body', 'blog_category', 'blog_image','image_caption','created_by']

    def Body(self, obj):
        if len(obj.body) > 30:
            return f'{obj.body[:30]}...........'
        else:
            return obj.body

@admin.register(BlogHelpful)
class BlogHelpfulAdmin(admin.ModelAdmin):
    list_display = ['blog', 'helpful', 'created_at']