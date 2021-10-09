#!/bin/bash

echo "Installing client" >> /home/pi/boxlogs
# npm install÷
pm2 start "serve -s build -l 3000"
