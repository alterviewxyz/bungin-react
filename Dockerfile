FROM node:8.15.0-alpine

WORKDIR /code
COPY . /code
RUN npm i > /dev/null
RUN  npm run build

CMD ["npm","run","start"]

