FROM node:latest as build-stage
WORKDIR /vensus
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /vensus
COPY --from=build-stage /vensus/dist /vensus
COPY nginx.conf /etc/nginx/nginx.conf
