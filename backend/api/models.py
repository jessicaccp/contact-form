from django.db import models


class ContactForm(models.Model):
    name = models.CharField(
        max_length=200,
        help_text='Your name e.g. John Doe')
    email = models.EmailField(
        help_text='Your email address e.g. johndoe@email.com')
    phone = models.CharField(
        max_length=20,
        null=True,
        blank=True,
        help_text='Your phone number e.g. +12 34 56789-0123')
    subject = models.CharField(
        max_length=100,
        help_text='A brief description of your message')
    message = models.TextField(help_text='The message you want to send')
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'[{self.sent_at}] {self.name} ({self.email}): {self.subject}'
