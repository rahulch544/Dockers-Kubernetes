FROM ubuntu

RUN apt-get update

RUN DEBIAN_FRONTEND=noninteractive apt-get install -y apache2

RUN DEBAIN_FRONTEND=noninteractive apt-get install -y apache2-utils

RUN apt-get clean

EXPOSE 80

CMD ["apache2ctl","-D", "FOREGROUND"]