from django.db import models
import json

# Create your models here.
class Charity(models.Model):
	name = models.TextField(max_length=30)
	post_code = models.CharField(max_length=7 ,blank=True)
	points = models.IntegerField("Amount of points per donation")
	amount = models.IntegerField("Amount of donation")
	description = models.TextField(max_length=1000,blank=True)

	def get_json(self):
		json_obj = self.get_info()

		return json.dumps(json_obj)

	def get_info(self):
		return {
			"name": self.name,
			"post_code": self.post_code,
			"points": self.points,
			"amount": self.amount,
			"description": self.description
		}