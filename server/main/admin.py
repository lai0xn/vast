from django.contrib import admin
from . import models

admin.site.register(models.Profile)
admin.site.register(models.Role)
admin.site.register(models.Vcenter)
admin.site.register(models.VM)
admin.site.register(models.MEP)
admin.site.register(models.OS)
admin.site.register(models.Backup)
admin.site.register(models.Plateforme)
# Register your models here.
