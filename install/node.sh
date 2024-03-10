#!/bin/bash

# Define the cron job
CRON_JOB="@reboot cd ~/MMSP-AGI && npm run start"

# Check if the cron job already exists
CRON_EXISTS=$(crontab -l | grep -F "$CRON_JOB" | wc -l)

if [ "$CRON_EXISTS" -eq 0 ]; then
  # The cron job doesn't exist, so add it
  (crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -
  echo "Cron job added successfully."
else
  echo "Cron job already exists. No changes made."
fi

# go to mmsp-agi directory
cd ~/MMSP-AGI

# docker build mmsp-agi from directory
npm run build

# docker run mmsp-agi
npm run start