#!/bin/bash

git add .

git commit -m "Updates"

git push

git pull

cd backend

git pull

cd .. 

docker-compose up