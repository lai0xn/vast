from django.contrib.auth import get_user_model
from rest_framework.schemas.coreapi import serializers



from rest_framework import serializers
from .models import Plateforme, Profile, Vcenter, Role, OS, VM, MEP, Backup

class PlateformeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plateforme
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class VcenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vcenter
        fields = '__all__'

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'

class OSSerializer(serializers.ModelSerializer):
    class Meta:
        model = OS
        fields = '__all__'

class VMSerializer(serializers.ModelSerializer):
    class Meta:
        model = VM
        fields = '__all__'

class MEPSerializer(serializers.ModelSerializer):
    class Meta:
        model = MEP
        fields = '__all__'

class BackupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Backup
        fields = '__all__'

