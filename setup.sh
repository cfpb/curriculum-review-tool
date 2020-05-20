#!/bin/bash

# ==========================================================================
# Setup script for installing project dependencies.
# NOTE: Run this script while in the project root directory.
#       It will not run correctly when run from another directory.
# ==========================================================================

# Set script to exit on any errors.
set -e

# Initialize project dependency directories.
init() {
  if [ -f "package-lock.json" ]; then
    DEP_CHECKSUM=$(cat package*.json | shasum -a 256)
  else
    DEP_CHECKSUM=$(cat package.json | shasum -a 256)
  fi

  if [ -f "package-lock.json" ]; then
    CR_TOOL_DEP_CHECKSUM=$(cat crtool/crtool/package*.json | shasum -a 256)
  else
    CR_TOOL_DEP_CHECKSUM=$(cat crtool/crtool/package.json | shasum -a 256)
  fi

  if [[ "$(node -v)" != 'v10.'* ]] &&
     [[ "$(node -v)" != 'v11.'* ]] &&
     [[ "$(node -v)" != 'v12.'* ]] &&
     [[ "$(node -v)" != 'v13.'* ]]; then
    printf "\033[1;31mPlease install Node 10.x or higher: 'nvm install 10'\033[0m\n"
  fi

  NODE_DIR=node_modules/
  echo "Main project Node modules directory: ${NODE_DIR}"

  CRTOOL_NODE_DIR=crtool/crtool/node_modules/
  echo "crtool Node modules directory: ${CRTOOL_NODE_DIR}"
}

# Clean project dependencies.
clean() {
  # If the node directory already exists,
  # clear it so we know we're working with a clean
  # slate of the dependencies listed in package.json.
  if [ -d ${NODE_DIR} ]; then
    echo "Removing main project Node modules directory."
    rm -rf ${NODE_DIR}
    echo "Main project Node modules have been removed."
  fi

  if [ -d ${CRTOOL_NODE_DIR} ]; then
    echo "Removing crtool Node Modules directory."
    rm -rf ${CRTOOL_NODE_DIR}
    echo "crtool Node modules have been removed."
  fi
}

# Install project dependencies.
install() {
  echo "Installing front-end dependencies."
  npm install -d --loglevel warn --unsafe-perm
}

# Add a checksum file
checksum() {
  echo -n "${DEP_CHECKSUM}" > ${NODE_DIR}/CHECKSUM
  echo -n "${CR_TOOL_DEP_CHECKSUM}" > ${CRTOOL_NODE_DIR}/CHECKSUM
}

# If the node directory exists, $NODE_DIR/CHECKSUM exists, and
# the contents DO NOT match the checksum of package.json, clear
# $NODE_DIR so we know we're working with a clean slate of the
# dependencies listed in package.json.
clean_and_install() {
  if [ ! -f $NODE_DIR/CHECKSUM ] ||
     [ ! -f $CRTOOL_NODE_DIR/CHECKSUM ] ||
     [ "$DEP_CHECKSUM" != "$(cat $NODE_DIR/CHECKSUM)" ]
     [ "$DEP_CHECKSUM" != "$(cat $CRTOOL_NODE_DIR/CHECKSUM)" ]; then
    clean
    install
    checksum
  else
    echo "Dependencies are up to date."
  fi
}

# Run tasks to build the project for distribution.
build() {
  echo "Building project."
  npx gulp build
}

# Execute requested (or all) functions.
if [ "$1" == "init" ]; then
  init ""
  clean_and_install
elif [ "$1" == "clean" ]; then
  echo "Clean project dependencies."
  init ""
  clean
  clean_and_install
  build
elif [ "$1" == "build" ]; then
  build
else
  init "$1"
  echo "Clean and install project dependencies."
  clean_and_install
  build
fi
