from rest_framework import serializers
from .models import Terms


class TermsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Terms
        fields = ['title', 'description']