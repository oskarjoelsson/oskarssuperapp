FROM node:lts-alpine3.12

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN apk add --upgrade --no-cache git

# COPY package.json /app/package.json
RUN npm install -g @angular/cli
RUN git clone https://github.com/oskarjoelsson/oskarssuperapp.git /app

# RUN ng new oskarssuperapp --defaults --skip-git

EXPOSE 4200

CMD ng serve --host 0.0.0.0