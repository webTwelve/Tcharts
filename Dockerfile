FROM nginx:stable-alpine as production-stage

EXPOSE 80


COPY . /usr/share/nginx/html


CMD ["nginx", "-g", "daemon off;"]
