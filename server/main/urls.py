from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from django.urls import include
router = DefaultRouter()
router.register(r'plateformes', views.PlateformeViewSet)
router.register(r'vcenters', views.VcenterViewSet)
router.register(r'roles', views.RoleViewSet)
router.register(r'os', views.OSViewSet)
router.register(r'vms', views.VMViewSet)
router.register(r'meps', views.MEPViewSet)
router.register(r'backups', views.BackupViewSet)


urlpatterns = [

    path('', include(router.urls)),
    path("api/test",views.test),
    path("api/auth/signup",views.signup)
]
