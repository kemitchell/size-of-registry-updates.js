#!/bin/sh
sort -g -r -k 3,3 sizes.log | head | awk '{ size = $3 / 1024 / 1024 ; print $1 " " $2 " " size "MB" }'
