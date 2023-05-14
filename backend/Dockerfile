FROM node:18-alpine

ENV DB_USER=postgres \
    DB_PASSWORD=postgres \
    DB_PORT=5432 \
    DB_NAME=nikpsdb \
    DB_HOST=10.103.136.104 \
    PORT=4000

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# If you are building your code for production
#RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 4000
CMD [ "node", "server.js" ]

