#!/bin/bash

cd /home/ec2-user/hello
sudo npm install
sudo pm2 start ./bin/www
