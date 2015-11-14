#!/usr/bin/env bash

apt-get update
apt-get install -y npm ruby-sass vim git lighttpd

ln -sf /usr/bin/nodejs /usr/bin/node

mv /var/www/html /var/www/html.old
ln -sf /vagrant /var/www/html

