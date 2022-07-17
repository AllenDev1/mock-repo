from rest_framework import serializers
from .models import Applink


class applinkserializer(serializers.ModelSerializer):
    class Meta:
        model = Applink
        fields = ['user', 'app', 'number']