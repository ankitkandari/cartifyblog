#!/bin/bash
source /home/ec2-user/.bash_profile

cd /home/ec2-user/hello
npm install
pm2 start ./bin/www
