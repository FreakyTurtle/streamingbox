#!/bin/bash

echo "pulling" >> /home/pi/boxlogs
git pull

cd backend
./init.sh

cd ..
cd client
./init.sh

chromium-browser --kiosk http://localhost:3000



