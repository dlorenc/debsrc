Package: three.js
Binary: libjs-three
Version: 111+dfsg1-2
Maintainer: Debian Javascript Maintainers <pkg-javascript-devel@lists.alioth.debian.org>
Uploaders: David Bremner <bremner@debian.org>, Ximin Luo <infinity0@debian.org>
Build-Depends: debhelper-compat (= 13), node-rollup-plugin-buble, uglifyjs, rollup
Architecture: all
Standards-Version: 4.5.1
Format: 3.0 (quilt)
Files:
 b633d3c46734a7c4db3ba25c5cf47c78 2080 three.js_111+dfsg1-2.dsc
 d14a4270d9b010c8a24e4a2c2f2044dc 1540972 three.js_111+dfsg1.orig.tar.xz
 dd52c6d1c613e16d3bb01d029dbe417e 4988 three.js_111+dfsg1-2.debian.tar.xz
Vcs-Browser: https://salsa.debian.org/js-team/three.js
Vcs-Git: https://salsa.debian.org/js-team/three.js.git
Checksums-Sha256:
 db28293792803a77d347dabf6097cdee0a328eeda754357cf12dccd50fd38554 2080 three.js_111+dfsg1-2.dsc
 38b27763897f5eef54135e25e28a9d9e422d3daa2dfd8e9c0193e5f1da95f89e 1540972 three.js_111+dfsg1.orig.tar.xz
 a6ff054fe77e3306b2d77fc29e56cc4e3fb8ad0add5b33d4d2f277d956c2cf92 4988 three.js_111+dfsg1-2.debian.tar.xz
Homepage: https://threejs.org
Package-List: 
 libjs-three deb javascript optional arch=all
Testsuite: autopkgtest
Testsuite-Triggers: node-three, nodejs
Directory: pool/main/t/three.js
Priority: optional
Section: misc
