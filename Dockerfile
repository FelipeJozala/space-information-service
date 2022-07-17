FROM node:17-alpine

WORKDIR /app

ADD ./src ./src
ADD ./@types ./@types

COPY package.json .
COPY package-lock.json .
COPY server.js .
COPY tsconfig.json .
COPY webpack.common.js .
COPY webpack.dev.js .
COPY webpack.prod.js .


RUN npm install
RUN npm run build

CMD [ "npm", "start" ]

EXPOSE 3000


