from rest_framework import viewsets, permissions
from .models import Comments
from .serializer import *


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comments.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly or permissions.IsAdminUser]


class CommentsbyPostViewSet(viewsets.ModelViewSet):
    queryset = Ads.objects.all()
    serializer_class = CommentsbyPostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly or permissions.IsAdminUser]


class RootCommentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows RootComment to be viewed
    """
    queryset = Comments.objects.filter(parent=None)
    serializer_class = TreeCommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly or permissions.IsAdminUser]
