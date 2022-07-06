from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from .serializer import FaqSerializer
from .models import Faq
from rest_framework.permissions import AllowAny
from rest_framework.filters import SearchFilter, OrderingFilter


class FaqViewSet(viewsets.ModelViewSet):
    queryset = Faq.objects.all()
    serializer_class = FaqSerializer
    permission_classes = (AllowAny,)
    http_method_names = ['get']


class FaqSearch(ListAPIView):
    queryset = Faq.objects.all()
    serializer_class = FaqSerializer
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('question', 'answer')
