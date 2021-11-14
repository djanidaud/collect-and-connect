from django.shortcuts import render
from django.http import HttpResponse
from .models import *
import json
from django.contrib.auth.models import User
import datetime
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def index(request):
	return HttpResponse(json.dumps([offer.get_info() for offer in Offer.objects.all()]))

def describe(request, pk):
	if Offer.objects.get(pk=pk) is not None:
		return HttpResponse(Offer.objects.get(pk=pk).get_json())
	else:
		return HttpResponse('Not found.')

@csrf_exempt
def register(request):
	if request.method == 'POST':
		offer = Offer(
				owner=User.objects.get(username='Petunia'),
				text=request.POST.get('text', ''),
				title=request.POST.get('title', ''),
				pub_date=datetime.datetime.now(),
				image=request.FILES['image'] if len(request.FILES) > 0 else None,
				location=request.POST.get('location', ''),
				value=int(request.POST.get('value', '')),
				offer_type=request.POST.get('type', ''),
				tags=request.POST.get('tags', '')
			)

		offer.save()
		return HttpResponse('Success')
	else:
		return HttpResponse('Error')
