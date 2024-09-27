FROM python:3.9.20-alpine

WORKDIR /app


RUN pip install flask
RUN pip install dateparser

COPY . .

CMD [ "python", "server.py" ]