from django.urls import path,include
from product_app.views import ProductView
from rest_framework import routers

route = routers.DefaultRouter()
route.register("", ProductView, basename='productview')

urlpatterns = [
    path('api/',include(route.urls)),
]