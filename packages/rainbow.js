Package: rainbow.js
Binary: libjs-rainbow
Version: 2.1.4+ds-4
Maintainer: Debian Javascript Maintainers <pkg-javascript-devel@lists.alioth.debian.org>
Uploaders: David Paleino <dapal@debian.org>
Build-Depends: debhelper-compat (= 13), gulp (>= 4), node-rollup-plugin-buble (>= 0.19.8~), node-through, uglifyjs, node-yargs, rollup (>= 1.10~)
Architecture: all
Standards-Version: 4.5.1
Format: 3.0 (quilt)
Files:
 027fb6d7793d8e573fbf21da686bf14a 2137 rainbow.js_2.1.4+ds-4.dsc
 0ee0c8e6eb61f8e2edfb249a16b7bd02 75772 rainbow.js_2.1.4+ds.orig.tar.xz
 c1febc2c8ee1951ae2ab3e2e6673d385 8584 rainbow.js_2.1.4+ds-4.debian.tar.xz
Vcs-Browser: https://salsa.debian.org/js-team/rainbow.js
Vcs-Git: https://salsa.debian.org/js-team/rainbow.js.git
Checksums-Sha256:
 faa16ec388e2d0bbece2d649fe2d030c8e1c1f3b36d896888a2f95a8b61d0f51 2137 rainbow.js_2.1.4+ds-4.dsc
 b2323a99210a657d5948e5df6d31de110af63f52bec7a4e6096866782c11150a 75772 rainbow.js_2.1.4+ds.orig.tar.xz
 41754a3c5246e4275b865e122ebbb005f797b48bc41b37762560283d6305431c 8584 rainbow.js_2.1.4+ds-4.debian.tar.xz
Homepage: https://craig.is/making/rainbows
Package-List: 
 libjs-rainbow deb javascript optional arch=all
Testsuite: autopkgtest
Testsuite-Triggers: nodejs, pkg-js-autopkgtest
Directory: pool/main/r/rainbow.js
Priority: source
Section: misc
