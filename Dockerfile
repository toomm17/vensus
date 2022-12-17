FROM node:latest as build-stage
WORKDIR /vensus
COPY package*.json ./
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /vensus
COPY --from=build-stage /vensus/dict /vensus
COPY nginx.conf /etc/nginx/nginx.conf
