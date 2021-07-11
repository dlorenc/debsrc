Package: node-md5.js
Binary: node-md5.js
Version: 1.3.5-3
Maintainer: Debian Javascript Maintainers <pkg-javascript-devel@lists.alioth.debian.org>
Uploaders: Bastien Roucariès <rouca@debian.org>
Build-Depends: debhelper-compat (= 12), dh-buildinfo, nodejs (>= 10), dpkg-dev (>= 1.17.14), node-inherits (>= 2.0.1) <!nocheck>, node-safe-buffer (>= 5.1.2) <!nocheck>, node-hash-base (>= 3.0.0) <!nocheck>, node-hash-test-vectors (>= 1.3.2) <!nocheck>, node-tape (>= 4.2) <!nocheck>, node-tap (>= 8) <!nocheck>
Architecture: all
Standards-Version: 4.4.0
Format: 3.0 (quilt)
Files:
 752ad7dbd354c7363382bf8f8e4a1aa8 2325 node-md5.js_1.3.5-3.dsc
 d3241cd618f195e8b7fe82cbe2536a37 3679 node-md5.js_1.3.5.orig.tar.gz
 570d0c55595b6064a35648112e0c65c2 3488 node-md5.js_1.3.5-3.debian.tar.xz
Vcs-Browser: https://salsa.debian.org/js-team/node-md5.js
Vcs-Git: https://salsa.debian.org/js-team/node-md5.js.git
Checksums-Sha256:
 337704e8569c7e6d5c9f63644f7f7fb29058188ff1c386ee559e7f8887e2cc6d 2325 node-md5.js_1.3.5-3.dsc
 17824c70d7e841eeda31fb28881ada8c6c41d737b4124d8c447e7e59a01150e1 3679 node-md5.js_1.3.5.orig.tar.gz
 ad12b48a24c391390bf66f9fd5d14028de7259be830e999f3e1d37f66359ac4a 3488 node-md5.js_1.3.5-3.debian.tar.xz
Homepage: https://github.com/crypto-browserify/md5.js
Package-List: 
 node-md5.js deb javascript optional arch=all
Testsuite: autopkgtest
Testsuite-Triggers: node-hash-test-vectors, node-tap, node-tape, nodejs
Directory: pool/main/n/node-md5.js
Priority: extra
Section: misc
