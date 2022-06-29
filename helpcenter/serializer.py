from rest_framework import serializers
from .models import HelpCenter


class HelpCenterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = HelpCenter
        fields = ['full_name', 'email_phone', 'category', 'message']
