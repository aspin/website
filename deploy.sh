#!/bin/bash

grunt
ssh root@kevinchen.ninja find /www/kevinchen/* | grep -v resume.pdf | rm -rf
scp -r dist/* root@kevinchen.ninja:/www/kevinchen/
