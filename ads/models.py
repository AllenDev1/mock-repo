from distutils.command.upload import upload
from turtle import update
from django.db import models
from django.conf import settings
from datetime import datetime 
import random
from django.db.models.signals import pre_save


class ImageUpload(models.Model):
    image = models.ImageField(upload_to="images")

    def __str__(self):
        return str(self.image)


class Category(models.Model):
    CATEGORY_TYPE = (
        ('ROOT', 'Main Category'),
        ('SUBR', 'Sub Category'),
        ('FILTER', 'Filter Category'),
        ('SUBF', 'Sub Filter Category'),
        ('BAR', 'Bar Category'),
    )
    DATA_TYPE = (
        ('STR', 'String'),
        ('BOOL', 'Boolean'),
        ('NUM', 'Number'),
        ('COL', 'Color'),
        ('NA', 'Not Applicable'),
    )
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.PROTECT)
    type = models.CharField(max_length=6, null=False, blank=False, choices=CATEGORY_TYPE, default="ROOT")
    data_type = models.CharField(max_length=6, null=False, blank=False, choices=DATA_TYPE, default="STR")
    image = models.ForeignKey(ImageUpload, related_name="category_image", null=True, blank=True,
                              on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    updated_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "category"
        verbose_name_plural = "categories"



class Main_Category(models.Model):
    name = models.CharField(max_length=30, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    updated_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "main_category"
        verbose_name_plural = "main_categories"

class Sub_Category(models.Model):
    parent = models.ForeignKey(Main_Category, null=True, blank=True, on_delete=models.PROTECT)
    name = models.CharField(max_length=30, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    updated_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "sub_category"
        verbose_name_plural = "sub_categories"

class Filter_Category(models.Model):
    DATA_TYPE = (
        ('STR', 'String'),
        ('LOC', 'Loction'),
        ('CHO', 'Choice'),
        ('RAN-P', 'Range  for price'),
        ('RAN-K', 'Range for kilometer'),
        ('RAN-M', 'Range for manufacture'),
        ('RAN-P', 'Range  for plot'),
        ('RAN-S', 'Range for sq.foot'),
    )
    parent = models.ForeignKey(Sub_Category, null=True, blank=True, on_delete=models.PROTECT)
    name = models.CharField(max_length=30, null=False, blank=False)
    data_type = models.CharField(max_length=6, null=False, blank=False, choices=DATA_TYPE, default="STR")
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    updated_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "filter_category"
        verbose_name_plural = "filter_categories"


class Sub_Filter_Category(models.Model):
    DATA_TYPE = (
        ('STR', 'String'),
        ('LOC', 'Loction'),
        ('CHO', 'Choice'),
        ('RAN-P', 'Range  for price'),
        ('RAN-K', 'Range for kilometer'),
        ('RAN-M', 'Range for manufacture'),
        ('RAN-P', 'Range  for plot'),
        ('RAN-S', 'Range for sq.foot'),
    )
    parent = models.ForeignKey(Filter_Category, null=True, blank=True, on_delete=models.PROTECT)
    name = models.CharField(max_length=30, null=False, blank=False)
    data_type = models.CharField(max_length=6, null=False, blank=False, choices=DATA_TYPE, default="STR")
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    updated_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "sub_filter_category"
        verbose_name_plural = "sub_filter_categories"

class Ads(models.Model):
    ad_id = models.CharField(max_length=13, null=False, blank=False)
    main_category = models.ForeignKey(Main_Category, related_name="ads_categories", on_delete=models.CASCADE, default=1)
    sub_category = models.ForeignKey(Sub_Category, related_name="ads_categories", on_delete=models.CASCADE, default=1)
    name = models.CharField(max_length=100, null=False, blank=False, default="car")
    price = models.FloatField(null=False, blank=False)
    image = models.ImageField(upload_to = "images/ads", blank= True, null= True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1)
    ad_views = models.IntegerField(null=False, default=0)
    active = models.BooleanField(default=True)


    def __str__(self):
        return f"{self.name}"

    def created(self):
        date = self.created_at.strftime("%B %d,%Y")
        return date

 
    class Meta:
        ordering = ("-created_at",)
        verbose_name = "ad"
        verbose_name_plural = "ads"


def random_id():
    id = f"AM{random.randint(0000000000, 9999999999)}"
    id = unique_id(id)
    return id

def unique_id(id):
    Ad_id = id
    id_exists = Ads.objects.filter(ad_id = Ad_id).exists()
    if id_exists:
        new_id = random_id()
        return new_id
    else:
        return Ad_id

def pre_save_ad_id(sender, instance, *args, **kwargs):
    if not instance.ad_id:
        instance.ad_id = random_id()

pre_save.connect(pre_save_ad_id, sender=Ads)

class Report(models.Model):
    REPORT_TYPE = (
        ('OFFENCE', 'offensive content'),
        ('DUPLICATE', 'duplicate ad'),
        ('FRAUD', 'fraud'),
        ('SOLD', 'product already sold'),
        ('OTHERS', 'others')
    )
    ads = models.ForeignKey(Ads, blank=False, null=False, on_delete=models.CASCADE)
    type = models.CharField(max_length=9, choices=REPORT_TYPE)
    msg = models.TextField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.type


class AdsImage(models.Model):
    ads = models.ForeignKey(Ads, related_name="ads_images", on_delete=models.CASCADE)
    image = models.ForeignKey(ImageUpload, related_name="image_product", on_delete=models.CASCADE)
    is_cover = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    updated_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return f" {self.ads.name} - {self.image}"


class FavAds(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    ads = models.ForeignKey(Ads, related_name="fav_ads", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.ads.name}"

    class Meta:
        ordering = ("-created_at",)
