#!/bin/bash
source /home/ec2-user/.bash_profile

npm install
pm2 start ./bin/www
