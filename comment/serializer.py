from rest_framework import serializers
from .models import Comments
from ads.serializer import CategorySerializer
from ads.models import Ads


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comments
        fields = ['user_comment', 'type', 'parent']


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

    def get_children(self, obj):
        comment = Comments.objects.filter(parent=obj.id)
        serializer = CategorySerializer(comment, many=True)
        return serializer.data

    class Meta:
        model = Comments
        fields = '__all__'
        depth = 2