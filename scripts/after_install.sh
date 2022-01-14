#!/bin/bash

cd /home/ec2-user/hello
sudo npm install -g pm2
sudo pm2 start ./bin/www
