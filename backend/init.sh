#!/bin/bash

echo "Installing backend" >> /home/pi/boxlogs
npm install >> /home/pi/boxlogs
npm run build >> /home/pi/boxlogs
