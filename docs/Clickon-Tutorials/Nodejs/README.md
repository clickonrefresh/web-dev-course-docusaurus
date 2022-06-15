# Using 'Node Version Manager' to install NodeJS on Ubuntu Server 20.04 LTS

[The official nvm repository](https://github.com/nvm-sh/nvm#installing-and-updating)

---

## Download nvm

#### First, use curl to fetch the nvm download script:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

---

## Initialize nvm

#### You will then be prompted to either restart your terminal session

#### _OR_

#### run these commands to initialise nvm:

```
export NVM_DIR="$HOME/.nvm"
```

```
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

```
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

---

## Install NodeJS

#### Check nvm version, list available downloads then install latest stable version of node

```
nvm version
```

```
nvm list-remote
```

```
nvm install node # installs latest version
```

## recommended install latest stable version or yarn

```
nvm install --lts
```

& enable yarn with

```
corepack enabled
```

you may be prompted to update yarn with a provided curl command.

```
curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
```
