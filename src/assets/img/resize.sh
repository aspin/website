#!/usr/bin/env bash
# Requires imagemagick to be installed

PATH=${1:-technology}
SIZE=${2:-32x32}

FILES="$PATH/*"
for f in $FILES
do
  cleaned=${f%.*}
  echo $cleaned
  echo $f
  /opt/homebrew/bin/magick convert $f -resize $SIZE $cleaned.png
done