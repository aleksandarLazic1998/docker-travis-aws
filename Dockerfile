FROM node:alpine AS build-stage
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
WORKDIR '/app'
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 3000