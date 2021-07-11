Package: should.js
Binary: node-should, libjs-should
Version: 13.2.3~dfsg-5
Maintainer: Debian Javascript Maintainers <pkg-javascript-devel@lists.alioth.debian.org>
Uploaders: Leo Iannacone <l3on@ubuntu.com>, Jérémy Lal <kapouer@melix.org>
Build-Depends: debhelper-compat (= 13), mocha <!nocheck>, node-bluebird <!nocheck>, node-rollup-plugin-node-resolve (>= 9~), node-rollup-plugin-commonjs (>= 15~), nodejs, pkg-js-tools (>= 0.9.3), rollup (>= 1), uglifyjs
Architecture: all
Standards-Version: 4.5.1
Format: 3.0 (quilt)
Files:
 becac35e5f440cc3a8645d0ec0f697c3 3793 should.js_13.2.3~dfsg-5.dsc
 dd3fff5b06b4cb20995fa3123724671e 6812 should.js_13.2.3~dfsg.orig-should-equal.tar.gz
 8f5738c24aefb1620bf0d82263f1a583 5304 should.js_13.2.3~dfsg.orig-should-format.tar.gz
 643c2bacac92a30d4170674217f7da3a 3230 should.js_13.2.3~dfsg.orig-should-type-adaptors.tar.gz
 a24ce88ac919bcd854458e34305faef9 3502 should.js_13.2.3~dfsg.orig-should-type.tar.gz
 ad8d440aaaf77239e7420df7621761d7 1708 should.js_13.2.3~dfsg.orig-should-util.tar.gz
 b4a402021da71c77fef299e1543b1406 42342 should.js_13.2.3~dfsg.orig.tar.gz
 85dd8bbe2665b88f0cb6895fb92e5744 5272 should.js_13.2.3~dfsg-5.debian.tar.xz
Vcs-Browser: https://salsa.debian.org/js-team/should.js
Vcs-Git: https://salsa.debian.org/js-team/should.js.git
Checksums-Sha256:
 cca4f177326dd13983e63a21bb163ea867b55f0417e5f5823550ffaef896442c 3793 should.js_13.2.3~dfsg-5.dsc
 e994a653a418cb223c53d337a331ed11c75668584f0e01b6b188f8327926c341 6812 should.js_13.2.3~dfsg.orig-should-equal.tar.gz
 3564150d37413924f10bea56ee6feb856903284b8add92d7e6d3362df8e32536 5304 should.js_13.2.3~dfsg.orig-should-format.tar.gz
 e23fdf4534fc242cae5945d792b092fc767e469982991f94fe36c0051bcbbc88 3230 should.js_13.2.3~dfsg.orig-should-type-adaptors.tar.gz
 ee8974807dd19e7d53972e9e6c4d3c4ad772132cd7c704636a7779e996fd8556 3502 should.js_13.2.3~dfsg.orig-should-type.tar.gz
 d8b24edcd74d74122a32ce05f76ddd331f160949643b2b62f3974a16f8705765 1708 should.js_13.2.3~dfsg.orig-should-util.tar.gz
 f6e6bbc6f07d62e49109b95050375934eb74c947763011a883177abebd4a59fc 42342 should.js_13.2.3~dfsg.orig.tar.gz
 a39e85ea56657e9c289ca3f9d6a73211695df0c51212b0655605d66bda6ba85e 5272 should.js_13.2.3~dfsg-5.debian.tar.xz
Homepage: https://github.com/shouldjs/should.js
Package-List: 
 libjs-should deb javascript optional arch=all
 node-should deb javascript optional arch=all
Testsuite: autopkgtest-pkg-nodejs
Directory: pool/main/s/should.js
Priority: optional
Section: misc
