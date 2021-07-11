#!/bin/bash
curl -LO http://ftp.debian.org/debian/dists/bullseye/Release
curl -LO http://ftp.debian.org/debian/dists/bullseye/Release.gpg
curl -LO http://ftp.debian.org/debian/dists/bullseye/main/source/Sources.gz
mkdir -p packages/
go run scripts/update.go
