#!/bin/bash

docker build -t frontend:v1 .

cd backend

docker build -t backend:v1 .