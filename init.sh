#!/bin/bash

rm -r /home/pi/boxlogs
echo "pulling" >> /home/pi/boxlogs
git pull

cd backend
cd home/pi/streamingbox/init.sh

cd ..
cd client
cd home/pi/streamingbox/init.sh

echo "starting chromium" >> /home/pi/boxlogs
chromium-browser --kiosk http://localhost:3000 >> /home/pi/boxlogs



