from rest_framework import serializers
from .models import *
from django.conf import settings
from django.contrib.auth import get_user_model

User = get_user_model()


class CategorySerializer(serializers.ModelSerializer):
    parent = serializers.StringRelatedField(source='parent.name')
    image_url = serializers.SerializerMethodField('get_image_url')

    def get_image_url(self, obj):
        if obj.image:
            return str(obj.image)
        else:
            return "default.jpg"

    class Meta:
        model = Category
        fields = ['name', 'image_url', 'type', 'data_type', 'parent']


class AdsSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(source='category.name')
    created_by = serializers.StringRelatedField(source='created_by.email')

    class Meta:
        model = Ads
        fields = ['ad_id', 'name', 'category','price', 'created_by',  'description', 'ad_views']


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email','get_full_name', 'first_name', 'last_name', 'image', 'number', 'created', 'about']


class AdsByCategorySerializer(serializers.ModelSerializer):
    products = serializers.SerializerMethodField('get_ads')

    def get_ads(self, obj):
        print(obj)
        ads = Ads.objects.filter(category=obj.id)
        serializer = AdsSerializer(ads, many=True)
        return serializer.data

    class Meta:
        model = Category
        fields = ['name', 'type', 'data_type', 'parent', 'products']


class AdsByUserSerializer(serializers.ModelSerializer):
    ads = serializers.SerializerMethodField('get_ads')

    def get_ads(self, obj):
        print(obj)
        ads = Ads.objects.filter(created_by=obj.id)
        serializer = AdsSerializer(ads, many=True)
        return serializer.data

    class Meta:
        model = User
        fields = ['email', 'ads']


class FavAdsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavAds
        fields = ['user.name', 'ads']


class TreeCategorySerializer(serializers.ModelSerializer):
    parent = serializers.StringRelatedField(source='parent.name')
    children = serializers.SerializerMethodField('get_children')

    def get_children(self, obj):
        category = Category.objects.filter(parent=obj.id)
        serializer = CategorySerializer(category, many=True)
        return serializer.data

    class Meta:
        model = Category
        fields = ['name', 'type', 'data_type', 'image', 'parent', 'children']


class RootCategorySerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField('get_children')

    def get_children(self, obj):
        category = Category.objects.filter(parent=obj.id)
        serializer = TreeCategorySerializer(category, many=True)
        return serializer.data

    class Meta:
        model = Category
        fields = ['name', 'type', 'data_type', 'image', 'children']
