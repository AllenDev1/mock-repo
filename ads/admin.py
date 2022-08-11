from django.contrib import admin
from django.contrib.auth import get_user_model

User = get_user_model()

from .models import (Category, Ads, AdsImage, Filter_Category, Main_Category, Sub_Category, Sub_Filter_Category)

admin.site.register((Category, AdsImage, Main_Category, Sub_Category, Filter_Category, Sub_Filter_Category))


@admin.register(Ads)
class AdsAdmin(admin.ModelAdmin):
    list_display = ['ad_id', 'name', 'price', 'descriptions', 'ad_views']
    # list_filter = ['category']
    fields = [ 'name', 'main_category', 'sub_category','price', 'description', 'created_by']

    def descriptions(self, obj):
        return obj.description[:30]

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "created_by":
            kwargs["queryset"] = User.objects.filter(email=request.user.email)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)
