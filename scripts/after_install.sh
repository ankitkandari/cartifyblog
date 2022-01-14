#!/bin/bash
source /home/ec2-user/.bash_profile

cd /home/ec2-user/hello
sudo npm install
sudo pm2 start ./bin/www
