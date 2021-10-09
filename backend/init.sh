#!/bin/bash

echo "Installing backend" >> /home/pi/boxlogs
npm install
npm run build
pm2 start "npm run server"

