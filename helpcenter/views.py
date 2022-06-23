from rest_framework import viewsets
from .models import HelpCenter
from .serializer import HelpCenterSerializer


class HelpCenterViewSet(viewsets.ModelViewSet):
    queryset = HelpCenter.objects.all()
    serializer_class = HelpCenterSerializer
