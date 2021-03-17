# FROM node:alpine AS build
# WORKDIR /usr/src/app
# COPY package*.json yarn.lock ./
# RUN yarn
# COPY . .
# CMD yarn run build


FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
RUN yarn install --production
COPY . .
# COPY --from=build /usr/src/app/dist ./dist
EXPOSE 4201
CMD yarn start