# ---- backend/Dockerfile ----
FROM python:3.12-slim

# set workdir
WORKDIR /app

# install system deps (for psycopg2, etc.)
RUN apt-get update && apt-get install -y build-essential libpq-dev && rm -rf /var/lib/apt/lists/*

# install python deps
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copy code
COPY . .

# expose flask port
EXPOSE 5000

# run flask
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]

