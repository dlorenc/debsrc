Package: vcr.py
Binary: python3-vcr, python-vcr-doc
Version: 4.0.2-1
Maintainer: Debian Python Modules Team <python-modules-team@lists.alioth.debian.org>
Uploaders: Daniele Tricoli <eriol@debian.org>
Build-Depends: debhelper-compat (= 12), dh-python, pandoc, python3-all, python3-aiohttp, python3-boto3, python3-contextlib2, python3-httplib2, python3-pytest, python3-pytest-httpbin, python3-pytest-localserver, python3-pytest-tornado, python3-mock, python3-requests, python3-setuptools, python3-six (>= 1.5), python3-sphinx (>= 1.3), python3-sphinx-rtd-theme, python3-tornado, python3-urllib3, python3-wrapt, python3-yaml, python3-yarl
Architecture: all
Standards-Version: 4.4.1
Format: 3.0 (quilt)
Files:
 049a3857e48e46985da39ee11e9c1494 2574 vcr.py_4.0.2-1.dsc
 199f480aee77ee050a91afcf49a18599 324196 vcr.py_4.0.2.orig.tar.gz
 0191b2aee227eaded7ec8ec36cb09d46 5856 vcr.py_4.0.2-1.debian.tar.xz
Vcs-Browser: https://salsa.debian.org/python-team/modules/vcr.py
Vcs-Git: https://salsa.debian.org/python-team/modules/vcr.py.git
Checksums-Sha256:
 50c7e1a103ac80ac654e0c337a4a4a480c70659fd42f2209c8a53a70185a8fd2 2574 vcr.py_4.0.2-1.dsc
 526f8522158f1f900b3d93f2da66bcc4594826b5969f610641d685c000e1595a 324196 vcr.py_4.0.2.orig.tar.gz
 807f968d9a222f8d585c6e12ca286080be5a31bf7722311add3e051390aa190b 5856 vcr.py_4.0.2-1.debian.tar.xz
Homepage: https://github.com/kevin1024/vcrpy/
Package-List: 
 python-vcr-doc deb doc optional arch=all
 python3-vcr deb python optional arch=all
Testsuite: autopkgtest, autopkgtest-pkg-python
Testsuite-Triggers: python3-all, python3-pytest, python3-pytest-httpbin, python3-pytest-localserver, python3-pytest-tornado
Directory: pool/main/v/vcr.py
Priority: optional
Section: misc
