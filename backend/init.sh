#!/bin/bash

npm install
npm run build
pm2 start "npm run server"
