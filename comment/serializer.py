from rest_framework import serializers
from .models import Comments
from ads.serializer import CategorySerializer
from ads.models import Ads


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    ads = serializers.StringRelatedField(source='ads.name')
    ads_id = serializers.StringRelatedField(source='ads.id')
    user = serializers.StringRelatedField(source='user.email')

    class Meta:
        model = Comments
        fields = ['ads_id', 'ads', 'user', 'user_comment', 'type', 'parent']


class CommentsbyPostSerializer(serializers.ModelSerializer):
    ads = serializers.SerializerMethodField('get_comments')

    def get_comments(self, obj):
        print(obj)
        comment = Comments.objects.filter(ads=obj.id)
        serializer = CommentSerializer(comment, many=True)
        return serializer.data

    class Meta:
        model = Ads
        fields = '__all__'


class TreeCommentSerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField('get_children')
    ads = serializers.StringRelatedField(source='ads.name')
    ads_id = serializers.StringRelatedField(source='ads.id')
    parent = serializers.StringRelatedField(source='parent.user_comment')
    user = serializers.StringRelatedField(source='user.email')

    def get_children(self, obj):
        comment = Comments.objects.filter(parent=obj.id)
        serializer = CategorySerializer(comment, many=True)
        return serializer.data

    class Meta:
        model = Comments
        fields = ['ads', 'ads_id', 'parent', 'user_comment', 'type', 'user', 'children']
