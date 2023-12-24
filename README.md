# command_chat_app

### Installation

1. Clone the repository:

   git clone https://github.com/roshandec29/command_chat_app.git
   cd command_chat_app

### Set up the Django server:

cd chat_server
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

The Django server will run at http://localhost:8000.


### Set up the ReactJS client:

cd ../chat_interface
npm install
npm start

The ReactJS app will run at http://localhost:3000.
