from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Plateforme(models.Model):
    id_plateforme = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()

class Profile(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)    
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    user_type = models.CharField(max_length=20,choices={"Admin":"Admin","Director":"Director","Client":"Client"})
    platform = models.ManyToManyField(Plateforme)


class Vcenter(models.Model):
    id_vcenter = models.AutoField(primary_key=True)
    nom_vcenter = models.CharField(max_length=100)
    adresse_ip = models.CharField(max_length=15)
    plateforme = models.ForeignKey(Plateforme, on_delete=models.CASCADE)

class Role(models.Model):
    name = models.CharField(max_length=100, primary_key=True)

class OS(models.Model):
    id_os = models.AutoField(primary_key=True)
    nom_de_os = models.CharField(max_length=100)
    version = models.CharField(max_length=50)
    description = models.TextField()

   
class VM(models.Model):
    id_vm = models.AutoField(primary_key=True)
    nom_de_la_vm = models.CharField(max_length=100)
    departement = models.CharField(max_length=100)
    type_de_vm = models.CharField(max_length=100)
    nombre_de_cpu = models.IntegerField()
    ram = models.IntegerField()
    actif = models.BooleanField(default=False)
    disque = models.IntegerField()
    os = models.ForeignKey(OS, on_delete=models.CASCADE)
    vcenter = models.ForeignKey(Vcenter, on_delete=models.CASCADE)

class MEP(models.Model):
    id_mep = models.AutoField(primary_key=True)
    plateforme = models.ForeignKey(Plateforme, on_delete=models.CASCADE)
    os = models.ForeignKey(OS, on_delete=models.CASCADE)
    responsable = models.CharField(max_length=100)
    nom_plateforme = models.CharField(max_length=100)
    version_os = models.CharField(max_length=50)
    vm_ajout = models.CharField(max_length=100)
    version_sgbd = models.CharField(max_length=50)
    version_applicatif = models.CharField(max_length=50)
    nom_dns = models.CharField(max_length=100)
    host_production = models.CharField(max_length=100)
    date_production = models.DateField()

    
class Backup(models.Model):
    id_backup = models.AutoField(primary_key=True)
    os = models.ForeignKey(OS, on_delete=models.CASCADE)
    plateforme = models.ForeignKey(Plateforme, on_delete=models.CASCADE)
    nom_du_serveur = models.CharField(max_length=100)
    responsable = models.CharField(max_length=100)
    adresse_ip = models.CharField(max_length=15)
    nom_dns = models.CharField(max_length=100)
    categorie = models.CharField(max_length=100)
    type_de_os = models.CharField(max_length=50)
    applicatif = models.CharField(max_length=100)
    responsable_svc = models.CharField(max_length=100)
    backup_svc = models.CharField(max_length=100)
    provenance = models.CharField(max_length=100)
    chemin_fichier = models.CharField(max_length=255)
    taille_du_fichier = models.CharField(max_length=100)


