#!/bin/bash

rm -r /home/pi/boxlogs
echo "pulling" >> /home/pi/boxlogs
git pull

cd /home/pi/streamingbox/backend/
./init.sh

cd /home/pi/streamingbox/client
./init.sh

echo "waiting for localhost" >> /home/pi/boxlogs
until $(curl --output /dev/null --silent --head --fail http://localhost:3000); do
    printf '.'
    sleep 5
done

echo "starting chromium" >> /home/pi/boxlogs
chromium-browser --kiosk http://localhost:3000 --use-gl=egl >> /home/pi/boxlogs



