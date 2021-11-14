from django.db import models
from django.contrib.auth.models import User
import json

OFFER_TYPES = [
	("ITEM", "Item"),
	("SERVICE", "Service"),
	("OTHER", "Other")
]

# Create your models here.
class Offer(models.Model):
	owner = models.OneToOneField(User, on_delete=models.CASCADE)
	text = models.TextField(max_length=1000,blank=True)
	title = models.CharField(max_length=50, blank=True)
	pub_date = models.DateTimeField('date published')
	value = models.IntegerField('Point value')
	offer_type = models.CharField(max_length=30,choices=OFFER_TYPES,default=OFFER_TYPES[0])
	image = models.ImageField(upload_to='media/uploads/offers/%Y/%m/%d/',default='/static/empty_offer.png')
	tags = models.TextField(max_length=500, blank=True)
	location = models.CharField(max_length=64)

	def get_json(self):
		json_obj = self.get_info()
		return json.dumps(json_obj)

	def get_info(self):
		return {
			"pk": self.pk,
			"owner": self.owner.username,
			"text": self.text,
			"title": self.title,
			"pub_date": str(self.pub_date),
			"location": self.location,
			"value": self.value,
			"type": self.offer_type,
			"image": self.image.url,
			"tags": self.tags.split(',')
		}

class Transaction(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	offer = models.ForeignKey(Offer, on_delete=models.CASCADE)

	def get_json(self):
		json_obj = {
			"owner": self.owner.username,
			"offer": self.offer.id
		}
		return json.dumps(json_obj)