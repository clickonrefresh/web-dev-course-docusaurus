# Using 'Node Version Manager' to install NodeJS on Ubuntu Server 20.04 LTS

[The official nvm repository](https://github.com/nvm-sh/nvm#installing-and-updating)

__________________________
## Download nvm
#### First, use curl to fetch the nvm download script:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

_________________________
## Initialize nvm
#### You will then be prompted to either restart your terminal session 
#### *OR* 
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

________________________
## Install NodeJS
#### Check nvm version, list available downloads then install latest stable version of node

```
nvm version
```

```
nvm list-remote
```

```
nvm install node # installs latest stable version
```
# Install Node via Node Version Manager
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
# run these commands to startup nvm
export NVM_DIR="$HOME/.nvm" 
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
# Install Node --lts version
nvm install --lts
# If you use yarn
# corepack enable
