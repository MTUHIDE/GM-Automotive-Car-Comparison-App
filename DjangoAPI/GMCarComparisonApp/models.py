from django.db import models

# Create your models here.
class Car(models.Model):
    type = models.CharField(max_length=100)
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    price = models.IntegerField()
    miles = models.IntegerField()
    color = models.CharField(max_length=100)
    image = models.CharField(max_length=1000)
    def __str__(self):
        return self.make + " " + self.model + " " + str(self.year)
    