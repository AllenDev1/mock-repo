from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework import routers
from faq.views import *
from ads.views import *
from comment.views import *
from helpcenter.views import *
from terms.views import *
from faq import views
from linkapp.views import AppLinkViewSets

router = routers.DefaultRouter()

router.register(r'category', CategoryViewSet, 'category')
router.register(r'tree', TreeCategoryViewSet, 'tree')
router.register(r'root', RootCategoryViewSet, 'root')
router.register(r'ads', AdsViewSet, 'ads generic')
router.register(r'reportad', ReportViewSet, 'report ad')
router.register(r'adsbycategory', AdsByCategoryViewSet, 'get ads by categories')
router.register(r'adsbyuser', AdsByUserViewSet, 'get ads by User')
router.register(r'favads', FavAdsViewSet, 'favads')
router.register(r'adsbylogedinuser', MyAdsViewSet, 'get ads by LogedInUser')
router.register(r'deactiveuser', DeactiveUserViewSet, 'get DeactiveUser')
router.register(r'users', UserViewSet, 'get Users')
router.register(r'commentsbypost', CommentsbyPostViewSet, 'get comments by post')
router.register(r'comments', CommentViewSet, 'get Comments')
router.register(r'rootcomment', RootCommentViewSet, 'rootcomment')
router.register(r'faqs', FaqViewSet, 'get faqs')
router.register(r'linkapps', AppLinkViewSets, 'link apps')
router.register(r'terms', TermsViewSet, 'get terms')
router.register(r'helpcenter', HelpCenterViewSet, 'get helpmessages')

urlpatterns = [
                  path('', include(router.urls)),
                  path('admin/', admin.site.urls),
                  path('gettoken/', TokenObtainPairView.as_view(), name='tokem_obtain_pair'),
                  path('refreshtoken/', TokenRefreshView.as_view(), name='token_refresh'),
                  path('faqsearch/', views.FaqSearch.as_view()),
                  path('auth/', include('allauth.urls'))

              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
