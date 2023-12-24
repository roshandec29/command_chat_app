# command_chat_app

### Installation

1. Clone the repository:

   a. git clone https://github.com/roshandec29/command_chat_app.git
   
   b. cd command_chat_app

### Set up the Django server:

   a. cd chat_server
	
   b. pip install -r requirements.txt
	
   c. python manage.py migrate
	
   d. python manage.py runserver

The Django server will run at http://localhost:8000.


### Set up the ReactJS client:

a. cd ../chat_interface

b. npm install

c. npm start

The ReactJS app will run at http://localhost:3000.
