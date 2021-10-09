#!/bin/bash

git pull

cd backend
./init.sh
cd ..
cd client
./init.sh
cd ..

chromium-browser --kiosk https://localhost:3000
