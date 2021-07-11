Package: sax.js
Binary: libjs-sax, node-sax
Version: 1.2.4+~1.2.1-2
Maintainer: Debian Javascript Maintainers <pkg-javascript-devel@lists.alioth.debian.org>
Uploaders: David Paleino <dapal@debian.org>, Jérémy Lal <kapouer@melix.org>
Build-Depends: debhelper-compat (= 13), dh-sequence-nodejs, node-tap <!nocheck>, nodejs, node-source-map, uglifyjs
Architecture: all
Standards-Version: 4.5.1
Format: 3.0 (quilt)
Files:
 9cd18225c5775809168ecaad6a37d6a2 2424 sax.js_1.2.4+~1.2.1-2.dsc
 7b0ccfdcce56fd408b106f1583d4bc87 2535 sax.js_1.2.4+~1.2.1.orig-types-sax.tar.gz
 b607d7910c97183eb7c6b03b7e5e8603 58457 sax.js_1.2.4+~1.2.1.orig.tar.gz
 b0f3f94ca411c911f325a8d7e4efc9e9 4828 sax.js_1.2.4+~1.2.1-2.debian.tar.xz
Vcs-Browser: https://salsa.debian.org/js-team/sax.js
Vcs-Git: https://salsa.debian.org/js-team/sax.js.git
Checksums-Sha256:
 432415e6d111388edd54d43f679cb4b3b4dfcbd6b562efb6fa7f55c4632cfb53 2424 sax.js_1.2.4+~1.2.1-2.dsc
 3e9dcad59f190f7606eb4bb17d1aa49b4062b969e8ceb6d6b02ccf1f779c19ba 2535 sax.js_1.2.4+~1.2.1.orig-types-sax.tar.gz
 10df7c52412acf9175fa3e69500f2884111831aa314bffacf0d8802093cece2f 58457 sax.js_1.2.4+~1.2.1.orig.tar.gz
 de1c9011daafece202de39efdd02599e0c4213d1efba71a02bc814cc5ad0c04e 4828 sax.js_1.2.4+~1.2.1-2.debian.tar.xz
Homepage: https://github.com/isaacs/sax-js
Package-List: 
 libjs-sax deb javascript optional arch=all
 node-sax deb javascript optional arch=all
Testsuite: autopkgtest-pkg-nodejs
Directory: pool/main/s/sax.js
Priority: source
Section: web
