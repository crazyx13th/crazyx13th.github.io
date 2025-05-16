FROM	nginx:1.22.1-alpine
EXPOSE	80
EXPOSE	443

COPY  /docker/nginx.conf       /etc/nginx/nginx.conf
COPY  /config/certificate.pem  /etc/nginx/certificate.pem
COPY  /config/certificate.key  /etc/nginx/certificate.key
