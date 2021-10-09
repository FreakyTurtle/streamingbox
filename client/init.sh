#!/bin/bash

echo "Installing client" >> /home/pi/boxlogs
npm install
pm2 start "npm start"
