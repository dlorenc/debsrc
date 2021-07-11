Package: node-sha.js
Binary: node-sha.js
Version: 2.4.11-2
Maintainer: Debian Javascript Maintainers <pkg-javascript-devel@lists.alioth.debian.org>
Uploaders: Bastien Roucariès <rouca@debian.org>
Build-Depends: debhelper (>= 11), dh-buildinfo, nodejs (>= 4.7), dpkg-dev (>= 1.17.14), node-tape (>= 3.0.1) <!nocheck>, node-tap (>= 10) <!nocheck>, node-inherits (>= 2.0.1) <!nocheck>, node-safe-buffer (>= 5.0.1) <!nocheck>, node-hash-test-vectors <!nocheck>
Architecture: all
Standards-Version: 4.1.4
Format: 3.0 (quilt)
Files:
 9200ce184e442cee1c8638b34da20651 2284 node-sha.js_2.4.11-2.dsc
 e2704a4284649f1209d4a64d2c464d22 10130 node-sha.js_2.4.11.orig.tar.gz
 d1d1d34d573ead90e79d7a84fad8f810 4772 node-sha.js_2.4.11-2.debian.tar.xz
Vcs-Browser: https://salsa.debian.org/js-team/node-sha.js
Vcs-Git: https://salsa.debian.org/js-team/node-sha.js.git
Checksums-Sha256:
 20205e68545071d3bcdf7644516cf981496c2c7034e07a231488f57de572d489 2284 node-sha.js_2.4.11-2.dsc
 380bc51652e4bc799d94ecce93448a157c171c786de95ac803b99019d6946182 10130 node-sha.js_2.4.11.orig.tar.gz
 3876eb735c6bd640afe44371fb72725c945bca4a136acf0958d46fd88c44ae20 4772 node-sha.js_2.4.11-2.debian.tar.xz
Homepage: https://github.com/crypto-browserify/sha.js
Package-List: 
 node-sha.js deb javascript optional arch=all
Testsuite: autopkgtest
Testsuite-Triggers: node-hash-test-vectors, node-tap, node-tape, nodejs
Directory: pool/main/n/node-sha.js
Priority: optional
Section: javascript
