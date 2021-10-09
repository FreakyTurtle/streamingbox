#!/bin/bash

rm -r /home/pi/boxlogs
echo "pulling" >> /home/pi/boxlogs
git pull

cd backend
./init.sh

cd ..
cd client
./init.sh

echo "starting chromium" >> /home/pi/boxlogs
chromium-browser --kiosk http://localhost:3000



