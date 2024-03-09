#!/bin/bash

## Update & Upgrade
sudo apt update && sudo apt upgrade -y

## Install Node.js & NPM & n to update node to stable
sudo apt install npm -y
sudo npm install -g n
sudo n stable

## Install Docker & Docker Compose
sudo apt install docker.io -y
sudo systemctl enable docker
sudo apt install docker-compose -y

## Install Portainer
docker pull portainer/portainer-ce:latest
docker run -d -p 9000:9000 --restart always -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce:latest

## Install Browserless
docker run -p 9222:3000 browserless/chrome:latest

## Route Ports
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
sudo apt install iptables-persistent -y

