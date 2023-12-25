from django.db import models

class ChatMessage(models.Model):
    command = models.TextField()
    text = models.TextField()
    sender = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)

    class Meta:
        db_table = 'chat_message'
        verbose_name = 'Chat_message'
        verbose_name_plural = 'Chat_messages'