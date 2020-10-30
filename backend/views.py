from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter


# Serve Single Page Application
index = never_cache(TemplateView.as_view(template_name='index.html'))
