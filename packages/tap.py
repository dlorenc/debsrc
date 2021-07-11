Package: tap.py
Binary: python-tap-doc, python3-tap, tappy
Version: 3.0-2
Maintainer: Debian Python Team <team+python@tracker.debian.org>
Uploaders: Nicolas CANIART <nicolas@caniart.net>, Simon McVittie <smcv@debian.org>,
Build-Depends: debhelper (>= 12.5), debhelper-compat (= 12), dh-exec, dh-python, dh-sequence-python3, python3-all, python3-babel, python3-mock, python3-more-itertools <!nocheck>, python3-setuptools, python3-sphinx, python3-yaml (>= 5.1) <!nocheck>
Architecture: all
Standards-Version: 4.5.1
Format: 3.0 (quilt)
Files:
 c94d37027ace1b3e48b5b9eaa9899b59 2492 tap.py_3.0-2.dsc
 dc3a5e79ebc901340934848ced09e907 141764 tap.py_3.0.orig.tar.gz
 f99f38b984d762c9ece057d90dc7efb6 6688 tap.py_3.0-2.debian.tar.xz
Vcs-Browser: https://salsa.debian.org/python-team/packages/tap.py
Vcs-Git: https://salsa.debian.org/python-team/packages/tap.py.git
Checksums-Sha256:
 b31b226d10a09b3b4905f9f8d5e3b57acd1a5f5dd007bd7c1d611b572818f243 2492 tap.py_3.0-2.dsc
 f5eeeeebfd64e53d32661752bb4c288589a3babbb96db3f391a4ec29f1359c70 141764 tap.py_3.0.orig.tar.gz
 7e1cec75d8cdd09918a7f0e81c588fa9cf9519a15a2572c92fe06a4c768642e5 6688 tap.py_3.0-2.debian.tar.xz
Homepage: https://github.com/python-tap/tappy
Dgit: 71720d54143fc9b67f3f59673afbf88cdf1d68bb debian archive/debian/3.0-2 https://git.dgit.debian.org/tap.py
Package-List: 
 python-tap-doc deb doc optional arch=all
 python3-tap deb python optional arch=all
 tappy deb devel optional arch=all
Testsuite: autopkgtest, autopkgtest-pkg-python
Testsuite-Triggers: python3-all, python3-mock, python3-more-itertools, python3-nose, python3-yaml
Directory: pool/main/t/tap.py
Priority: optional
Section: misc
