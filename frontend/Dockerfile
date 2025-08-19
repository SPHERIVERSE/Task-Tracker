# ---- frontend/Dockerfile ----
FROM node:20-slim

WORKDIR /app

# install deps
COPY package*.json ./
RUN npm install

# copy code
COPY . .

# build the frontend
RUN npm run build

# serve using a tiny webserver
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]

