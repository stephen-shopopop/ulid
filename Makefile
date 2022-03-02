#!make
PROJECT:= $(shell node -p "require('./package.json').name")
NVM=v0.38.0
NODE=v14.18.1

all: 
	make install
	make run CMD="npm install"

.PHONY: install
install: 
	@echo "Installing project ${PROJECT}..."
	. ${NVM_DIR}/nvm.sh && nvm install ${NODE}

## Run
.PHONY: run
run:
	. ${NVM_DIR}/nvm.sh && nvm use ${NODE} && $(CMD)

## Nvm: install nvm
## Start make nvm and restart your terminal
.PHONY: nvm
nvm:
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/${NVM}/install.sh | bash
