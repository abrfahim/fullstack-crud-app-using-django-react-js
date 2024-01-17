from django.db import models

# Create your models here.

class Product(models.Model):
    image = models.ImageField(upload_to='uploads/images', null=False, blank=False)
    name = models.CharField(max_length=150, null=False, blank=False)
    price = models.DecimalField(max_digits=6, decimal_places=2, null=False, blank=False)
    description = models.TextField()
    category = models.CharField(max_length=100, null=True)
    
    def __str__(self):
        return self.name
    
    
    