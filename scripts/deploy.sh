#!/usr/bin/env bash

yarn build
scp -r dist/* root@45.55.69.255:/www/kevinchen/
scp -r resume.pdf root@45.55.69.255:/www/kevinchen/resume.pdf
