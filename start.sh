#!/bin/bash
if [ ! -d "logs" ]; then
    mkdir logs
fi
cd backend
if [ ! -d "venv" ]; then
    python -m pip install --upgrade pip virtualenv
    python -m virtualenv venv
fi
source venv/bin/activate
python -m pip install -r requirements.txt
if [ ! -d "api/migrations" ]; then
    source venv/bin/activate
    python manage.py makemigrations api
    python manage.py migrate api
fi
LOGS_DIR=../logs
nohup python manage.py runserver 8000 > $LOGS_DIR/back.out 2> $LOGS_DIR/back.err &
cd ../frontend
npm install
nohup npm run dev -- --port 8001 > $LOGS_DIR/front.out 2> $LOGS_DIR/front.err &
cd ..