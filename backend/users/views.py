from django.shortcuts import render
from django.http import HttpResponse
from .models import *
import json

# Create your views here.
def index(request):
	return HttpResponse('Users')

def describe(request, username):
	if User.objects.get(username=username) is not None:
		profile = Profile.objects.get(user=User.objects.get(username=username))
		return HttpResponse(profile.get_json())
	else:
		return HttpResponse('User ' + username + ' not found')