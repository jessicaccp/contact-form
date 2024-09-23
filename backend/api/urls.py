from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactFormViewSet, SubmitContactFormView

router = DefaultRouter()
router.register(r'forms', ContactFormViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('submit/', SubmitContactFormView.as_view(), name='submit'),
]
