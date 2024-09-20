from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactFormViewSet

router = DefaultRouter()
router.register(r'contactform', ContactFormViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
