from django.contrib import admin
from .models import HelpCenter, Faq, Terms

admin.site.register(Terms)
admin.site.register(HelpCenter)
admin.site.register(Faq)
