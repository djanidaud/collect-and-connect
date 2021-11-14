from django.shortcuts import render
from django.http import HttpResponse
from .models import Charity

# Create your views here.
def index(request):
	return HttpResponse(json.dumps([charity.get_info() for charity in Charity.objects.all()]))