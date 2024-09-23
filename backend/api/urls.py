from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactFormViewSet, SubmitContactFormView

router = DefaultRouter()
router.register(r'contactform', ContactFormViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('submit-contact-form/', SubmitContactFormView.as_view(), name='submit-contact-form'),
]
