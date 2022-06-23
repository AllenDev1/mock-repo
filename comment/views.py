from rest_framework import viewsets
from .models import Comments
from .serializer import *


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comments.objects.all()
    serializer_class = CommentSerializer


class CommentsbyPostViewSet(viewsets.ModelViewSet):
    queryset = Ads.objects.all()
    serializer_class = CommentsbyPostSerializer


class RootCommentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows RootComment to be viewed
    """
    queryset = Comments.objects.filter(parent=None)
    serializer_class = TreeCommentSerializer
