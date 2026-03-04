from django.db import models
from django.contrib.auth.models import User as AuthUser

# Create your models here.
class User(models.Model):
    firstname=models.CharField(max_length=100)
    lastname=models.CharField(max_length=100)
    email=models.EmailField()
    phone=models.CharField(max_length=15)

    def __str__(self):
        return self.firstname
    

class UserProfile(models.Model):
    ROLE_CHOICES = (("admin","Admin"),
                    ("user","User"),)
    user = models.OneToOneField(AuthUser,on_delete=models.CASCADE)
    role=models.CharField(max_length=10,choices=ROLE_CHOICES,default="user")

    def __strt__(self):
        return self.user.username

