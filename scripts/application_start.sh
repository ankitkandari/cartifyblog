#!/bin/bash
source /home/ec2-user/.bash_profile

sudo npm install
sudo pm2 start ./bin/www
