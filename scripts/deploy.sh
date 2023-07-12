#!/usr/bin/env bash

IP="45.55.69.255"

rm -rf dist
yarn build

ssh root@$IP "rm -rf /www/kevinchen/*"
scp -r dist/* root@$IP:/www/kevinchen/
scp -r resume.pdf root@$IP:/www/kevinchen/resume.pdf
