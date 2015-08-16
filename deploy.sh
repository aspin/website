#!/bin/bash

find /www/kevinchen/* | grep -v resume.pdf | rm -rf
cp -r dist/* /www/kevinchen/
