from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .models import UserProfile

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



@api_view(['POST'])
def login_view(request):
    username = request.data.get("username")
    password = request.data.get("password")
    user = authenticate(
        username=username,
        password=password
    )
    if user:
        token = RefreshToken.for_user(user)
        role = UserProfile.objects.get(user=user).role
        return Response({
            "token": str(token.access_token),
            "role": role
        })
    return Response({
        "error": "Invalid credentials"
    }, status=401)    