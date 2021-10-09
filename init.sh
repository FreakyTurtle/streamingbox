#!/bin/bash

echo "installing dependency..."
sudo npm install pm2 -g

echo "starting server..."
cd ./backend
./init.sh
echo "starting client gui..."
cd ..
cd ./client
./init.sh
cd ..

chromium-browser --kiosk https://localhost:3000
