from django.contrib import admin
from django.contrib.auth import get_user_model

User = get_user_model()

from .models import (Category, Ads, AdsImage)

admin.site.register((Category, AdsImage))


@admin.register(Ads)
class AdsAdmin(admin.ModelAdmin):
    list_display = ['ad_id', 'name', 'price', 'descriptions']
    list_filter = ['category']
    fields = ['category', 'name', 'price', 'description', 'created_by']

    def descriptions(self, obj):
        return obj.description[:30]

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "created_by":
            kwargs["queryset"] = User.objects.filter(email=request.user.email)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)
