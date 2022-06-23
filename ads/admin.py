from django.contrib import admin

from .models import (Category, Ads, AdsImage)

admin.site.register((Category, AdsImage))


@admin.register(Ads)
class AdsAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'description']
    list_filter = ['category']
