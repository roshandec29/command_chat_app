# chat_app/urls.py
from django.urls import path
from .views import ProcessChat

urlpatterns = [
    path('chat/', ProcessChat.as_view(), name='process_chat'),
]