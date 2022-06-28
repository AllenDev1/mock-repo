from rest_framework import viewsets
from .models import Terms
from .serializer import TermsSerializer
from rest_framework.permissions import AllowAny


class TermsViewSet(viewsets.ModelViewSet):
    queryset = Terms.objects.all()
    serializer_class = TermsSerializer
    permission_classes = (AllowAny,)
    http_method_names = ['get']
