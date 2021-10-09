#!/bin/bash

cd home/pi/streamingbox

echo "installing dependency..."
sudo npm install pm2 -g

echo "starting server..."
cd home/pi/streamingbox/backend
home/pi/streamingbox/backend/init.sh
echo "starting client gui..."
cd home/pi/streamingbox/client
home/pi/streamingbox/init.sh
cd home/pi/streamingbox

chromium-browser --kiosk https://localhost:3000
