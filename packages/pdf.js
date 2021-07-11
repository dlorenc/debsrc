Package: pdf.js
Binary: libjs-pdf, pdf.js-common
Version: 2.6.347+dfsg-3
Maintainer: Debian Javascript Maintainers <pkg-javascript-devel@lists.alioth.debian.org>
Uploaders: David Prévot <taffit@debian.org>, Debian Mozilla Extension Maintainers <pkg-mozext-maintainers@lists.alioth.debian.org>
Build-Depends: debhelper-compat (= 13), dh-sequence-nodejs, gulp, node-autoprefixer, node-babel-loader, node-css-loader, node-debbundle-acorn (>= 8.0.0), node-escodegen, node-gulp-rename, node-isstream, node-merge-stream, node-plugin-error, node-postcss, node-vinyl-sourcemaps-apply, node-through, node-typescript, nodejs, webpack (>= 4.43.0-3~)
Architecture: all
Standards-Version: 4.5.0
Format: 3.0 (quilt)
Files:
 49b87ca504e41d2c9e6b5bb63501fa0f 2421 pdf.js_2.6.347+dfsg-3.dsc
 b2ce5721c17a24214ad81136bc65a50e 45881844 pdf.js_2.6.347+dfsg.orig.tar.xz
 f977c6a40c39a17203998b36cb914312 1002328 pdf.js_2.6.347+dfsg-3.debian.tar.xz
Vcs-Browser: https://salsa.debian.org/js-team/pdf.js
Vcs-Git: https://salsa.debian.org/js-team/pdf.js.git
Checksums-Sha256:
 993aa192ddc76732754299b127399ff08614efb103017b56a80d382e794dc628 2421 pdf.js_2.6.347+dfsg-3.dsc
 fdc02073cad442e6f7697b1434df5da15a0b80faa5bef6a92af08eae1f5a6631 45881844 pdf.js_2.6.347+dfsg.orig.tar.xz
 bbe9f7fc253390e70599da560f5c4730dba193b455a05258163097fe00ee9c8c 1002328 pdf.js_2.6.347+dfsg-3.debian.tar.xz
Homepage: https://mozilla.github.io/pdf.js/
Package-List: 
 libjs-pdf deb javascript optional arch=all
 pdf.js-common deb javascript optional arch=all
Directory: pool/main/p/pdf.js
Priority: source
Section: misc
