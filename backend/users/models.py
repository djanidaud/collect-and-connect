from django.db import models
from django.contrib.auth.models import User
import json

# Create your models here.
class Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	#post_code = models.CharField(max_length=7 ,blank=True)
	points = models.IntegerField()
	phone = models.CharField(max_length=12, blank=True, help_text='Contact phone number')
	bio = models.TextField(max_length=500, blank=True)
	image = models.ImageField(upload_to='media/uploads/users/%Y/%m/%d/',default='/static/empty_user.png')

	def get_json(self):
		json_obj = {
			"username": self.user.username,
			"name": self.user.first_name,
			"email": self.user.email,
			"points": self.points,
			"phone": self.phone,
			"bio": self.bio,
			"image": self.image.url
		}

		return json.dumps(json_obj)