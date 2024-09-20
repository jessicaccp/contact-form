#!/bin/bash
cd backend
if [ ! -d "venv" ]; then
    python -m pip install --upgrade pip virtualenv
    python -m virtualenv venv
fi
source venv/bin/activate
python -m pip install -r requirements.txt
nohup python manage.py runserver 8000 > ../backlog.out 2> ../backlog.err &
cd ../frontend
npm install
nohup npm run dev -- --port 8001 > ../frontlog.out 2> ../frontlog.err &
cd ..