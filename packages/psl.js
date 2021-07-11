Package: psl.js
Binary: libjs-psl, node-psl
Version: 1.8.0+ds-4
Maintainer: Debian Javascript Maintainers <pkg-javascript-devel@lists.alioth.debian.org>
Uploaders: Xavier Guimard <yadd@debian.org>, Utkarsh Gupta <guptautkarsh2102@gmail.com>
Build-Depends: debhelper-compat (= 13), mocha <!nocheck>, nodejs (>= 6), node-babel7, node-browserify-lite, node-punycode, node-rollup-plugin-babel (>= 5.2~), node-rollup-plugin-commonjs (>= 15~), node-rollup-plugin-node-resolve (>= 11~), node-rollup-plugin-json (>= 4.1~), node-rollup-plugin-node-polyfills, dh-sequence-nodejs, rollup, uglifyjs.terser
Architecture: all
Standards-Version: 4.5.1
Format: 3.0 (quilt)
Files:
 326cd62eb8b6b56e233e506f4c0ed4a2 2370 psl.js_1.8.0+ds-4.dsc
 931c04f374bbb29ba9addd8e4057eaaf 88332 psl.js_1.8.0+ds.orig.tar.xz
 4e806a9ff8971e6ae45970b5349c8ad9 4324 psl.js_1.8.0+ds-4.debian.tar.xz
Vcs-Browser: https://salsa.debian.org/js-team/psl.js
Vcs-Git: https://salsa.debian.org/js-team/psl.js.git
Checksums-Sha256:
 3d777946bb06bbe54dfba77917d10a75d063e75d198fbf1fe334f6097f1e525d 2370 psl.js_1.8.0+ds-4.dsc
 4aee8038a9a853bd9520004364e0eb745718b8c3621e20063b1f7c80e76a0937 88332 psl.js_1.8.0+ds.orig.tar.xz
 a5e34249f5e5efee661dd749f25f41a827abc042a508a9bb07da8caaca2f51e8 4324 psl.js_1.8.0+ds-4.debian.tar.xz
Homepage: https://github.com/lupomontero/psl#readme
Package-List: 
 libjs-psl deb javascript optional arch=all
 node-psl deb javascript optional arch=all
Testsuite: autopkgtest-pkg-nodejs
Directory: pool/main/p/psl.js
Priority: extra
Section: misc
