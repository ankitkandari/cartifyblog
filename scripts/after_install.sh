#!/bin/bash

cd /home/ec2-user/hello
npm install
pm2 start ./bin/www
