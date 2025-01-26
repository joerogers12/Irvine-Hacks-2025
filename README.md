# Irvine-Hacks-2025

[Google Doc](https://docs.google.com/document/d/16KT81ohcDMZYexMhbazqddCk7aVn18654S--C19Ou_s/edit?tab=t.0)


```
npm install express mongoose dotenv
npm init -y
npm install pg
```
Design file link

https://www.figma.com/design/JXpYl679vSfcaP4gFAHbRm/Swiping-house-Design?node-id=0-1&t=v8JXmm97f3fOsABk-1

## run backend (flask):
1. cd backend
2. venv\Scripts\activate
3. pip install -r requirements.txt (also only do once, installs dependencies, skip step in future)
4. python run.py
5. go to http://localhost:5000

## see backend data in sample frontend (React):
1. make sure backend is running at localhost:5000 (active in terminal as well)
2. open another terminal
3. cd into frontend
4. pip install (only do once, skip step in future)
5. npm start
6. go to http://localhost:3000
**Also look at code to see how to fetch data from flask using await fetch/other functions

https://www.youtube.com/watch?v=rxzOqP9YwmM
