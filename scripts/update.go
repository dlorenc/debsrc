package main

import (
	"bufio"
	"compress/gzip"
	"fmt"
	"io"
	"log"
	"os"
	"strings"
)

var path = "Sources.gz"

func main() {

	f, err := os.Open(path)
	if err != nil {
		panic(err)
	}
	gz, err := gzip.NewReader(f)
	if err != nil {
		panic(err)
	}

	scanner := bufio.NewScanner(gz)
	// optionally, resize scanner's capacity for lines over 64K, see next example

	var w io.WriteCloser
	for scanner.Scan() {
		line := scanner.Text()
		if strings.HasPrefix(line, "Package: ") {
			packageName := strings.TrimPrefix(line, "Package: ")
			w, err = os.Create("packages/" + packageName)
			if err != nil {
				panic(err)
			}
			fmt.Println(packageName)
		}
		if line == "" {
			w.Close()
		} else {
			fmt.Fprintln(w, line)
		}
	}

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}
}
