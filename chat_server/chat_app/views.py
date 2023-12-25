# chat_app/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from .controllers import chat_controller


class ProcessChat(APIView):

    def post(self, request):
        command = request.data.get('command', '')
        response_text = chat_controller.process_command(command)
        return Response({'response': response_text})
