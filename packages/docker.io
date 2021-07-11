Package: docker.io
Binary: docker.io, golang-github-docker-docker-dev, docker-doc
Version: 20.10.5+dfsg1-1
Maintainer: Debian Go Packaging Team <team+pkg-go@tracker.debian.org>
Uploaders: Arnaud Rebillout <elboulangero@gmail.com> ,Dmitry Smirnov <onlyjob@debian.org> ,Tim Potter <tpot@hpe.com> ,Tianon Gravi <tianon@debian.org> ,Paul Tagliamonte <paultag@debian.org>
Build-Depends: debhelper-compat (= 13), dh-apparmor, dh-golang (>= 1.14~), bash-completion, ca-certificates, golang-any (>= 2:1.10~), go-md2man (>= 1.0.3~), gogoprotobuf, libprotobuf-dev, golang-dbus-dev (>= 5.0.2~), golang-etcd-server-dev, golang-github-armon-go-metrics-dev, golang-github-aws-aws-sdk-go-dev, golang-github-bsphere-le-go-dev, golang-github-burntsushi-toml-dev, golang-github-cespare-xxhash-dev, golang-github-cilium-ebpf-dev, golang-github-cloudflare-cfssl-dev, golang-github-containerd-cgroups-dev, golang-github-containerd-console-dev, golang-github-containerd-containerd-dev (>= 1.4.2~ds1-2~), golang-github-containerd-continuity-dev (>= 0.0~git20190426~), golang-github-containerd-fifo-dev, golang-github-containerd-go-runc-dev, golang-github-containerd-typeurl-dev, golang-github-coreos-bbolt-dev, golang-github-coreos-go-systemd-dev (>= 20~), golang-github-creack-pty-dev, golang-github-cyphar-filepath-securejoin-dev, golang-github-deckarep-golang-set-dev, golang-github-docker-distribution-dev (>= 2.7.1~), golang-github-docker-docker-credential-helpers-dev (>= 0.6.1~), golang-github-docker-go-connections-dev (>= 0.4.0~), golang-github-docker-go-events-dev, golang-github-docker-go-metrics-dev, golang-github-docker-go-units-dev (>= 0.4.0~), golang-github-docker-libkv-dev, golang-github-docker-libtrust-dev, golang-github-docker-notary-dev, golang-github-fernet-fernet-go-dev, golang-github-fluent-fluent-logger-golang-dev (>= 1.3.0~), golang-github-fsnotify-fsnotify-dev, golang-github-fvbommel-sortorder-dev, golang-github-gofrs-flock-dev, golang-github-gogo-googleapis-dev, golang-github-golang-groupcache-dev, golang-github-googleapis-gax-go-dev, golang-github-google-go-cmp-dev (>= 0.2.0~), golang-github-google-shlex-dev, golang-github-google-uuid-dev, golang-github-gorilla-mux-dev (>= 1.7.1~), golang-github-gotestyourself-gotest.tools-dev, golang-github-graylog2-go-gelf-dev (>= 0.0+git20191017~), golang-github-grpc-ecosystem-go-grpc-prometheus-dev, golang-github-grpc-ecosystem-go-grpc-middleware-dev, golang-github-grpc-ecosystem-grpc-opentracing-dev, golang-github-hashicorp-memberlist-dev (>= 0.1.0~), golang-github-hashicorp-serf-dev, golang-github-ishidawataru-sctp-dev, golang-github-imdario-mergo-dev (>= 0.3.3~), golang-github-json-iterator-go-dev (>= 1.1.4~), golang-github-miekg-dns-dev (>= 1.1.26~), golang-github-mitchellh-hashstructure-dev, golang-github-moby-sys-dev, golang-github-moby-term-dev, golang-github-modern-go-reflect2-dev, golang-github-morikuni-aec-dev, golang-github-opencontainers-go-digest-dev, golang-github-opencontainers-image-spec-dev (>= 1.0.1~), golang-github-opencontainers-runc-dev (>= 1.0.0~rc8~), golang-github-opencontainers-selinux-dev (>= 1.8.0~), golang-github-opencontainers-specs-dev (>= 1.0.1~), golang-github-opentracing-contrib-go-stdlib-dev, golang-github-opentracing-opentracing-go-dev, golang-github-philhofer-fwd-dev, golang-github-prometheus-client-golang-dev (>= 0.9.0~), golang-github-racksec-srslog-dev, golang-github-samuel-go-zookeeper-dev, golang-github-sirupsen-logrus-dev (>= 1.0.2~), golang-github-spf13-cobra-dev (>= 1.1.1~), golang-github-spf13-pflag-dev (>= 1.0.5-2~), golang-github-tchap-go-patricia-dev, golang-github-tonistiigi-units-dev, golang-github-urfave-cli-dev (>= 1.20.0~), golang-github-vbatts-tar-split-dev (>= 0.11.1~), golang-github-vishvananda-netlink-dev (>= 1.0.0~), golang-github-vishvananda-netns-dev (>= 0.0~git20170707~), golang-github-xeipuuv-gojsonschema-dev (>= 1.2.0~), golang-gocapability-dev, golang-golang-x-net-dev, golang-golang-x-oauth2-google-dev | golang-golang-x-oauth2-dev, golang-golang-x-term-dev, golang-golang-x-time-dev, golang-google-api-dev, golang-google-cloud-dev, golang-google-grpc-dev, golang-goprotobuf-dev (>= 0.0~git20151207~), golang-go-zfs-dev, golang-protobuf-extensions-dev, gotestsum, libapparmor-dev, libbtrfs-dev | btrfs-progs (<< 4.16.1~), libdevmapper-dev, libseccomp-dev, pkg-config, procps, tzdata, git, golang-github-davecgh-go-spew-dev, golang-github-evanphx-json-patch-dev (>= 4.1.0~), golang-github-googleapis-gnostic-dev, golang-github-google-gofuzz-dev, golang-gopkg-inf.v0-dev, golang-k8s-sigs-yaml-dev
Build-Conflicts: golang-github-docker-docker-dev
Architecture: linux-any all
Standards-Version: 4.5.1
Format: 3.0 (quilt)
Files:
 a60d32b68a2391e303544c251b52353e 6884 docker.io_20.10.5+dfsg1-1.dsc
 c830a574ec8c6cf806848a2b368eff1d 1962992 docker.io_20.10.5+dfsg1.orig-cli.tar.xz
 53e8ff9c4089d51366a012c89e863bb9 629972 docker.io_20.10.5+dfsg1.orig-libnetwork.tar.xz
 7a91fb6b945095c4c46a5f6819c97373 721180 docker.io_20.10.5+dfsg1.orig-swarmkit.tar.xz
 c3733e88907a86c8bd0921f5e941e462 2251340 docker.io_20.10.5+dfsg1.orig.tar.xz
 e9a0e1bad2fc2ee713e3e8501b1ab21e 44484 docker.io_20.10.5+dfsg1-1.debian.tar.xz
Vcs-Browser: https://salsa.debian.org/go-team/packages/docker
Vcs-Git: https://salsa.debian.org/go-team/packages/docker.git
Checksums-Sha256:
 74f1d2558edc6abb77bdf14c70b14565863d9020b409f0933494a3ec44b4d114 6884 docker.io_20.10.5+dfsg1-1.dsc
 641bc3d2f9e6c8d7350cedb12dc0373d63544d77c89e3f4fde996fe4d0b0eeb9 1962992 docker.io_20.10.5+dfsg1.orig-cli.tar.xz
 867d69e8f4839141a12c977445cfc2ac501884ea81c281fcc34dd47bd2ddfba2 629972 docker.io_20.10.5+dfsg1.orig-libnetwork.tar.xz
 8d81f18cc0c5ca0a66af18a429da04ce1bde1685585a6153e82ad57e0fec07c9 721180 docker.io_20.10.5+dfsg1.orig-swarmkit.tar.xz
 5069d5f23992bf972dec5f1bcbba7638281f102ee87ec00004dabcbbc7a1f647 2251340 docker.io_20.10.5+dfsg1.orig.tar.xz
 8b206903c0d5f4c93367b93646ffa55eac5b45d59404c3bb0f9441cdfae8f897 44484 docker.io_20.10.5+dfsg1-1.debian.tar.xz
Homepage: https://mobyproject.org
Go-Import-Path: github.com/docker/docker
Package-List: 
 docker-doc deb doc optional arch=all
 docker.io deb admin optional arch=linux-any
 golang-github-docker-docker-dev deb golang optional arch=all
Testsuite: autopkgtest
Testsuite-Triggers: debian-archive-keyring, debootstrap
Directory: pool/main/d/docker.io
Priority: optional
Section: misc
