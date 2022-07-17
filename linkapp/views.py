from rest_framework.permissions import IsAuthenticated
from .serializer import applinkserializer
from .models import Applink
from rest_framework import viewsets


class AppLinkViewSets(viewsets.ModelViewSet):
    queryset = Applink.objects.all()
    serializer_class = applinkserializer
    permission_classes = IsAuthenticated,

