Package: vue.js
Binary: node-vue, libjs-vue
Version: 2.6.12+dfsg-3
Maintainer: Debian Javascript Maintainers <pkg-javascript-devel@lists.alioth.debian.org>
Uploaders: Paolo Greppi <paolo.greppi@libpf.com>
Build-Depends: debhelper-compat (= 13), node-babel7, node-babylon, node-de-indent, node-he, node-magic-string, node-rollup-plugin-alias (>= 3.1~), node-rollup-plugin-buble, node-rollup-plugin-commonjs (>= 15~), node-rollup-plugin-node-resolve (>= 9~), node-rollup-plugin-replace, dh-sequence-nodejs, rollup, uglifyjs.terser
Architecture: all
Standards-Version: 4.5.1
Format: 3.0 (quilt)
Files:
 9f652eb2daa5644150052c765993bc6d 2316 vue.js_2.6.12+dfsg-3.dsc
 dfd54a0c4d7bd2bf6564a9e6e9e76269 470240 vue.js_2.6.12+dfsg.orig.tar.xz
 329faab36aa6834431ad6c71829f0794 11976 vue.js_2.6.12+dfsg-3.debian.tar.xz
Vcs-Browser: https://salsa.debian.org/js-team/vue.js
Vcs-Git: https://salsa.debian.org/js-team/vue.js.git
Checksums-Sha256:
 b138e6ec62c5b5c283bbb15ea39e86980b7c8c122aca442cf9c7cc0af869c75d 2316 vue.js_2.6.12+dfsg-3.dsc
 f95e7df508bcddd2086607d9caa1bea687543a9d718510e511fa803cb04db7e9 470240 vue.js_2.6.12+dfsg.orig.tar.xz
 d88ade30113a3f3737fe9184ae897725c43ece7893dfdda99941fced25f39cc9 11976 vue.js_2.6.12+dfsg-3.debian.tar.xz
Homepage: https://github.com/vuejs/vue
Package-List: 
 libjs-vue deb javascript optional arch=all
 node-vue deb javascript optional arch=all
Testsuite: autopkgtest-pkg-nodejs
Directory: pool/main/v/vue.js
Priority: extra
Section: misc
