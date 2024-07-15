from django.urls import path
from .views import EntryListCreate

urlpatterns = [
    path('entries/', EntryListCreate.as_view(), name='entry-list-create'),
]
