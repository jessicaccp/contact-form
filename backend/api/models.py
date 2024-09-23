from django.db import models


class ContactForm(models.Model):
    name = models.CharField(
        max_length=200,
        help_text='The sender\'s name')
    email = models.EmailField(
        help_text='The sender\'s email address')
    phone = models.CharField(
        max_length=20,
        null=True,
        blank=True,
        help_text='The sender\'s phone number')
    subject = models.CharField(
        max_length=100,
        help_text='The subject of the message')
    message = models.TextField(help_text='The message content')
    sent_at = models.DateTimeField(auto_now_add=True, help_text='The date and time the message was sent')

    def __str__(self):
        return f'[{self.sent_at}] {self.name} ({self.email}): {self.subject}'
