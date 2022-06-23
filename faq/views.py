from rest_framework import viewsets
from .serializer import FaqSerializer
from .models import Faq


class FaqViewSet(viewsets.ModelViewSet):
    queryset = Faq.objects.all()
    serializer_class = FaqSerializer
