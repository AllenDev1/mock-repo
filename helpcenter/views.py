from rest_framework import viewsets
from .models import HelpCenter, Terms, Faq
from .serializer import HelpCenterSerializer, TermsSerializer, FaqSerializer
from rest_framework.permissions import *
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter, OrderingFilter


class HelpCenterViewSet(viewsets.ModelViewSet):
    queryset = HelpCenter.objects.all()
    serializer_class = HelpCenterSerializer
    permission_classes = [AllowAny]
    http_method_names = ['post']


class TermsViewSet(viewsets.ModelViewSet):
    queryset = Terms.objects.all()
    serializer_class = TermsSerializer
    permission_classes = (AllowAny,)
    http_method_names = ['get']


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