from django.db import models

class Entry(models.Model):
    name = models.CharField(max_length=100)
    mobile = models.PhoneNumberField(("11"))
    email = models.EmailField(max_length=100)

    def __str__(self):
        return self.name
