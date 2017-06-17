package main

import "fmt"

func main() {
	var sum int
	i := 1
	j := 2
	for j < 4000000 {
		if j%2 == 0 {
			sum += j
		}
		i, j = j, i+j
	}
	fmt.Println(sum)
}
