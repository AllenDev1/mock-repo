from rest_framework import viewsets
from .models import Terms
from .serializer import TermsSerializer


class TermsViewSet(viewsets.ModelViewSet):
    queryset = Terms.objects.all()
    serializer_class = TermsSerializer
