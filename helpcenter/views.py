from rest_framework import viewsets
from .models import HelpCenter
from .serializer import HelpCenterSerializer
from rest_framework.permissions import AllowAny


class HelpCenterViewSet(viewsets.ModelViewSet):
    queryset = HelpCenter.objects.all()
    serializer_class = HelpCenterSerializer
    permission_classes = (AllowAny,)
    http_method_names = ['post']
