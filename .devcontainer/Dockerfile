FROM oven/bun:1-debian

# Git 2.34 以降でないと SSH 鍵による署名ができないため、backports から新しめのバージョンを入れる
RUN export $(cat /etc/os-release | grep VERSION_CODENAME) \
 && echo "deb http://deb.debian.org/debian ${VERSION_CODENAME}-backports main" >> /etc/apt/sources.list \
 && apt update \
 && apt install -y --no-install-recommends -t ${VERSION_CODENAME}-backports git openssh-client