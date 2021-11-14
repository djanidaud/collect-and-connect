from django.contrib import admin
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import *

# Register your models here.
admin.site.register(Profile)

#@receiver(post_save, sender=User)
#def create_user_profile(sender, instance, created, **kwargs):
#    if created:
#        Profile.objects.create(user=instance, points=100, post_code='None')

#@receiver(post_save, sender=User)
#def save_user_profile(sender, instance, **kwargs):
#    instance.profile.save()

