from rest_framework.response import Response
from .models import *
from rest_framework import permissions
from rest_framework.filters import SearchFilter
from rest_framework import viewsets, permissions
from .serializer import *
from django.contrib.auth import get_user_model
User = get_user_model()

class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows category to be viewed
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly or permissions.IsAdminUser]


class TreeCategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Treecategory to be viewed
    """
    queryset = Category.objects.filter(parent=None)
    serializer_class = TreeCategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly or permissions.IsAdminUser]


class RootCategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Rootcategory to be viewed
    """
    queryset = Category.objects.filter(parent=None)
    serializer_class = RootCategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly or permissions.IsAdminUser]


class AdsViewSet(viewsets.ModelViewSet):
    """
    API endpoint for ads
    """
    queryset = Ads.objects.all()
    serializer_class = AdsSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [SearchFilter]
    search_fields = ['category__name', 'category__parent__name', 'category__parent__parent__name']

    class Meta:
        ordering = ['-id']


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint for users
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class AdsByCategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = AdsByCategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class AdsByUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = AdsByUserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class MyAdsViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving logined user ads.
    """

    def list(self, request):
        print(request.user.id)
        queryset = Ads.objects.filter(id=request.user.id)
        serializer = AdsSerializer(queryset, many=True)
        return Response(serializer.data)


class DeactiveUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(is_active=False)
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class FavAdsViewSet(viewsets.ModelViewSet):
    queryset = FavAds.objects.all()
    serializer_class = FavAdsSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


