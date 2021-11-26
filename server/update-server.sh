#!/usr/bin/env bash
ssh [server] 'cd [folder]; sudo docker-compose down; cd [folder]/frontend; npm install; npm run prod;'

