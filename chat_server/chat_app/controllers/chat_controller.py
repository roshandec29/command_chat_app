from chat_app.serializers import ChatMessageSerializer
import subprocess

def process_command(command):
    response_text = execute_command_locally(command)
    
    chat_msg = {
        'command': command,
        'text': response_text,
        'sender': 'server'
    }

    serialized_data = ChatMessageSerializer(data=chat_msg)

    if serialized_data.is_valid():
        serialized_data.save()
    else:
        print(f"erorr : {serialized_data.errors}")
    
    print(response_text)
    return response_text


def execute_command_locally(command):
    try:
        
        result = subprocess.run(command, shell=True, capture_output=True, text=True)

        # Check if the command was successful
        if result.returncode == 0:
            output = result.stdout.strip()
            return f"Command '{command}' executed successfully:\n{output}"
        else:
            # If the command failed, include the error message
            error_message = result.stderr.strip()
            return f"Error executing command '{command}':\n{error_message}"

    except Exception as e:
        return f"Error executing command '{command}': {str(e)}"


