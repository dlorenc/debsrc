Package: moment-timezone.js
Binary: node-moment-timezone, libjs-moment-timezone
Version: 0.5.32+dfsg1-2+2021a
Maintainer: Debian Javascript Maintainers <pkg-javascript-devel@lists.alioth.debian.org>
Uploaders: Kyle Robbertze <paddatrapper@debian.org> , Martina Ferrari <tina@debian.org>
Build-Depends: debhelper-compat (= 13), grunt, node-moment <!nocheck>, node-grunt-contrib-nodeunit <!nocheck>, dh-sequence-nodejs, uglifyjs, tzdata (>= 2021a)
Architecture: all
Standards-Version: 4.5.1
Format: 3.0 (quilt)
Files:
 f359621784d13603a2831e3d76a976e4 2376 moment-timezone.js_0.5.32+dfsg1-2+2021a.dsc
 69c2d1e8cdec64158f47f169842059ae 653972 moment-timezone.js_0.5.32+dfsg1.orig.tar.xz
 cf45ff121c7fc87cadee06bd16091313 5312 moment-timezone.js_0.5.32+dfsg1-2+2021a.debian.tar.xz
Vcs-Browser: https://salsa.debian.org/js-team/moment-timezone.js
Vcs-Git: https://salsa.debian.org/js-team/moment-timezone.js.git
Checksums-Sha256:
 b7af127e4f61979861cbb0621a80a86086954868b4f178eaf3685fc150b62220 2376 moment-timezone.js_0.5.32+dfsg1-2+2021a.dsc
 ca30716056dfcaa7bb3cd82b40b62266af475ac35f13aeec379c54aaa7f7199c 653972 moment-timezone.js_0.5.32+dfsg1.orig.tar.xz
 fbfff427c350b67a314212092ae9812e07769098485a6b5bc6ec2846c78a8dc1 5312 moment-timezone.js_0.5.32+dfsg1-2+2021a.debian.tar.xz
Homepage: https://momentjs.com/timezone/
Package-List: 
 libjs-moment-timezone deb javascript optional arch=all
 node-moment-timezone deb javascript optional arch=all
Testsuite: autopkgtest-pkg-nodejs
Directory: pool/main/m/moment-timezone.js
Priority: extra
Section: misc
