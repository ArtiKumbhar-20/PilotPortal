from django.urls import path
from .views import *


urlpatterns = [
    path('ideasub/', IdeaSubView.as_view(), name='idea-submission'),
    path('ideaDetailFetch/<int:teamUniqueID>/', IdeaDetailView.as_view(), name='idea-detail-fetch'),
    path('IdeaStatView/', IdeaStatView.as_view(), name='idea-status'),
    path('Ideadetails/<int:ideaID>/', IdeaSubViewSet.as_view(actions={'get': 'retrieve'}), name='idea-detail'),

    
    path('ideaeval/', IdeaEvalView.as_view(), name='idea-evaluation'),
    path('evaluated-ideas/<str:evalPanelistID>/', IdeaEvalListView.as_view(), name='idea-eval-list'),
]