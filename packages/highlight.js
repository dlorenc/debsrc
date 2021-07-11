Package: highlight.js
Binary: libjs-highlight.js, node-highlight.js, highlight.js-doc
Version: 9.18.5+dfsg1-1
Maintainer: Debian Javascript Maintainers <pkg-javascript-devel@lists.alioth.debian.org>
Uploaders: Cédric Boutillier <boutil@debian.org>, Thorsten Alteholz <debian@alteholz.de>, Ximin Luo <infinity0@debian.org>
Build-Depends: debhelper-compat (= 13), dh-sequence-nodejs, latexmk, mocha <!nocheck>, node-async <!nocheck>, node-bluebird <!nocheck>, node-jsdom <!nocheck>, node-lodash <!nocheck>, node-should <!nocheck>, uglifyjs, python3, python3-sphinx, texlive-fonts-recommended, texlive-latex-base, texlive-latex-extra, texlive-plain-generic
Architecture: all
Standards-Version: 4.5.1
Format: 3.0 (quilt)
Files:
 cd7ec17aa500b7b95a0bad6236a3b3ef 2889 highlight.js_9.18.5+dfsg1-1.dsc
 d499d86ae0d8e4436ad646e69206192e 2516 highlight.js_9.18.5+dfsg1.orig-types-highlightjs.tar.xz
 d69ce4f2ee441060763555a63a92ce71 515932 highlight.js_9.18.5+dfsg1.orig.tar.xz
 4ba249aa8bd6d7a8300da032b5ad3e84 198688 highlight.js_9.18.5+dfsg1-1.debian.tar.xz
Vcs-Browser: https://salsa.debian.org/js-team/highlight.js
Vcs-Git: https://salsa.debian.org/js-team/highlight.js.git
Checksums-Sha256:
 b64a7f3ca7eaf4dea145dc11e4a72a29e4c90e63c8839209ed5f094fc7467b9d 2889 highlight.js_9.18.5+dfsg1-1.dsc
 e8dbb7550ed9cbd1ac2683d67640a6cfc8b81fee6dd3919dfa5b32791aaf2dee 2516 highlight.js_9.18.5+dfsg1.orig-types-highlightjs.tar.xz
 40e515e6ce4ffe580dea647c676d065210453af73e857a08ecfceac9ad2d89c4 515932 highlight.js_9.18.5+dfsg1.orig.tar.xz
 3fc7bc9b7b3694f4ae1f9c06c435df39f46971eae8eee5f248cf70804d441430 198688 highlight.js_9.18.5+dfsg1-1.debian.tar.xz
Homepage: https://highlightjs.org/
Package-List: 
 highlight.js-doc deb javascript optional arch=all
 libjs-highlight.js deb javascript optional arch=all
 node-highlight.js deb javascript optional arch=all
Testsuite: autopkgtest-pkg-nodejs
Directory: pool/main/h/highlight.js
Priority: optional
Section: misc
