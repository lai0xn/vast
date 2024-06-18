from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import Response, status
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from .models import Plateforme, Profile, Vcenter, Role, OS, VM, MEP, Backup
from .serializers import PlateformeSerializer, ProfileSerializer, VcenterSerializer, RoleSerializer, OSSerializer, VMSerializer, MEPSerializer, BackupSerializer

@api_view()
def test(request):
    return Response("Server seems working",status=status.HTTP_200_OK)

@api_view(["POST"])
def signup(request):
    user = get_user_model()
    email = request.data.get("email","")
    password = request.data.get("password","")
    first_name = request.data.get("first_name","")
    last_name = request.data.get("last_name","")
    user_type = request.data.get("user_type","") 
    try :
        user = user.objects.create_user(username=email,password=password)
        Profile.objects.create(first_name=first_name,last_name=last_name,user_type=user_type,user=user)
        return Response("signup successfull",status=status.HTTP_200_OK)
    except Exception as exp:
        return Response(str(exp),status=status.HTTP_400_BAD_REQUEST)





class PlateformeViewSet(viewsets.ModelViewSet):
    queryset = Plateforme.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = PlateformeSerializer



class VcenterViewSet(viewsets.ModelViewSet):
    queryset = Vcenter.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = VcenterSerializer
class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = RoleSerializer

class OSViewSet(viewsets.ModelViewSet):
    queryset = OS.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = OSSerializer

class VMViewSet(viewsets.ModelViewSet):
    queryset = VM.objects.all()
    serializer_class = VMSerializer

class MEPViewSet(viewsets.ModelViewSet):
    queryset = MEP.objects.all()
    serializer_class = MEPSerializer
    permission_classes = [IsAuthenticated]

class BackupViewSet(viewsets.ModelViewSet):
    queryset = Backup.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = BackupSerializer

