set title "npm Public Registry Updates"
set terminal png size 800, 600
set output "sizes.png"

set ylabel "Size of Update\n(JSON.stringify(chunk).length)"
set autoscale y

set xlabel "Sequence Number"
set autoscale x

plot [:][:] 'sizes.log' using 1:2 title "" with lines
