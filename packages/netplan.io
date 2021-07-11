Package: netplan.io
Binary: netplan.io, libnetplan0, libnetplan-dev
Version: 0.101-4
Maintainer: Debian netplan Maintainers <team+netplan@tracker.debian.org>
Uploaders: Andrej Shadura <andrewsh@debian.org>, Mathieu Trudel-Lapierre <mathieu.tl@gmail.com>, Łukasz 'sil2100' Zemczak <lukasz.zemczak@canonical.com>
Build-Depends: debhelper-compat (= 12), pkg-config, bash-completion, libyaml-dev, libglib2.0-dev, uuid-dev, python3 (>= 3.1), python3-coverage, python3-yaml, python3-netifaces, libsystemd-dev, systemd, dbus-x11, pyflakes3 <!nocheck>, pycodestyle | pep8 <!nocheck>, python3-nose <!nocheck>, pandoc, openvswitch-switch [amd64] <!nocheck>
Architecture: linux-any
Standards-Version: 4.5.0
Format: 3.0 (quilt)
Files:
 965b4a25b3a05fbe61ff649b06b1bcf3 2373 netplan.io_0.101-4.dsc
 87e149fe623474d1521399e71c3a1e64 194976 netplan.io_0.101.orig.tar.gz
 4c35cacb63f547d26ee62de9f2aceb1d 7900 netplan.io_0.101-4.debian.tar.xz
Vcs-Browser: https://salsa.debian.org/debian/netplan.io
Vcs-Git: https://salsa.debian.org/debian/netplan.io.git
Checksums-Sha256:
 175fddbb590e2a9e688a0871d3c974ee5621b4d3cbc9b4c8ca00e66fa42f29c8 2373 netplan.io_0.101-4.dsc
 c0817c6b74e78165ae81b0e7af7e7b3a3d0d31f15ce75712700644a7004e651f 194976 netplan.io_0.101.orig.tar.gz
 60670c3d1935d67ea752976ab9111984960ae28c3641afa0bd7ac0298241ed09 7900 netplan.io_0.101-4.debian.tar.xz
Homepage: https://netplan.io/
Dgit: 7f4e08f7ffe358ccff27fc94b367c842d228ada6 debian archive/debian/0.101-4 https://git.dgit.debian.org/netplan.io
Package-List: 
 libnetplan-dev deb net optional arch=linux-any
 libnetplan0 deb net optional arch=linux-any
 netplan.io deb net optional arch=linux-any
Testsuite: autopkgtest
Testsuite-Triggers: dnsmasq-base, gir1.2-nm-1.0, hostapd, libnm0, network-manager, openvswitch-switch, python3-gi, systemd, wireguard-tools
Directory: pool/main/n/netplan.io
Priority: extra
Section: misc
