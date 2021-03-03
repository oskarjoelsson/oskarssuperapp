FROM node:lts-alpine3.12

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install -g @angular/cli
COPY . /app

EXPOSE 4200
CMD ls