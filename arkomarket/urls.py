from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework import routers
from ads.views import *
from comment.views import *
from helpcenter.views import *
from authentication.views import *
from carrer.views import *
from blog.views import *
from linkapp.views import AppLinkViewSets
from allauth.socialaccount.providers.google import views as google_views

router = routers.DefaultRouter()

router.register(r'maincategory', MainCategoryViewSet, 'maincategory')
router.register(r'subcategory', SubCategoryViewSet, 'subcategory')
router.register(r'filtercategory', FilterCategoryViewSet, 'filtercategory')
router.register(r'subfiltercategory', SubFilterCategoryViewSet, 'subfiltercategory')
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
router.register(r'blog', BlogViewSet, 'get blogs')
router.register(r'bloghelpful', BlogHelpfulViewSet, 'get bloghelpful')
router.register(r'vacancies', CarrerViewSet, 'get vacancies')
router.register(r'applicants', ApplicantViewSet, 'get applicants')

urlpatterns = [
                  path('', include(router.urls)),
                  path('admin/', admin.site.urls),
                  path('gettoken/', TokenObtainPairView.as_view(), name='tokem_obtain_pair'),
                  path('refreshtoken/', TokenRefreshView.as_view(), name='token_refresh'),
                  path('faqsearch/', FaqSearch.as_view()),
                  path('auth/', include('allauth.urls')),



                  path('auth/google/', google_views.oauth2_login, name='google_login_default'),
                  path('auth/google/callback/', google_callback, name='google_callback'),
                  path('google/connect', GoogleConnect.as_view(), name='google_connect'),   
                  path('google/login/', google_login, name='google_login'),
                  path('ip/', get_client_ip, name='get_ip'),
                  path('auth/user/', getLoggedInUser, name='getLoggedInUser')

                

              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
