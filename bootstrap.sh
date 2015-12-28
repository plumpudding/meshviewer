#!/usr/bin/env bash

apt-get update
apt-get install -y npm ruby-sass vim git lighttpd

#ln -sf /usr/bin/nodejs /usr/bin/node

mv /var/www /var/www.old
ln -sf /vagrant /var/www

