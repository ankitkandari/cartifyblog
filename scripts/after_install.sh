#!/bin/bash

cd /home/ec2-user/hello
npm install -g pm2
pm2 start ./bin/www
