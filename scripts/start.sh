#!/bin/bash
cd /opt/biki-sports
npm install
pm2 start app.js --name biki-sports
pm2 save

