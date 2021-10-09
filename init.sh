#!/bin/bash

sudo npm install pm2 -g

git pull

cd ./backend
./init.sh
cd ..
cd ./client
./init.sh
cd ..

chromium-browser --kiosk https://localhost:3000
