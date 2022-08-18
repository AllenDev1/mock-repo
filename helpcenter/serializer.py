from rest_framework import serializers
from .models import HelpCenter, Terms, Faq


class FaqSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Faq
        fields = ['question', 'answer', 'type']


class TermsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Terms
        fields = ['title', 'description', 'type']

class HelpCenterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = HelpCenter
        fields = ['full_name', 'email_phone', 'category', 'message']
