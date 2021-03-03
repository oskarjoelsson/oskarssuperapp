FROM node:lts-alpine3.12

ENV PATH /node_modules/.bin:$PATH

RUN npm install -g @angular/cli

EXPOSE 4200
CMD ng serve --host 0.0.0.0