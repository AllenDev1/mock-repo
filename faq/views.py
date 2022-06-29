from rest_framework import viewsets
from .serializer import FaqSerializer
from .models import Faq
from rest_framework.permissions import AllowAny


class FaqViewSet(viewsets.ModelViewSet):
    queryset = Faq.objects.all()
    serializer_class = FaqSerializer
    permission_classes = (AllowAny,)
    http_method_names = ['get']
