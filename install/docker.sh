#!/bin/bash

# Define the cron job
CRON_JOB="@reboot cd ~/MMSP-AGI && npm run start"

# Check if the cron job exists and remove it
(crontab -l | grep -vF "$CRON_JOB") | crontab -

echo "If the cron job existed, it has been removed."

## go to mmsp-agi directory
cd ~/MMSP-AGI

## docker build mmsp-agi from directory
docker build -t mmsp-agi .

## docker run mmsp-agi with .env
docker run -d -p 3000:3000 --restart always -e .env mmsp-agi
