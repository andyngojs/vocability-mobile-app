#!/bin/bash

declare PATH_NPX="~/.nvm/versions/node/v20.18.0/bin/npx"

declare root_path="."

op=$(eval "$PATH_NPX @react-native-community/cli config")

# check folder build has been existed yet
if [ -e "$root_path/android/app/build" ]; then
  echo "$root_path/android/app/build is exists"
  if [ -e "$root_path/android/app/build/generated/autolinking/autolinking.json" ]; then
    # Use jq to convert output to Json and echo into autolinking.json
    echo "$op" | jq '.' > $root_path/android/app/build/generated/autolinking/autolinking.json
    echo "autolinking success"
  fi
else
  echo "$root_path/android/app/build is not exists"
  cd $root_path/android/app
  mkdir -pv build/generated/autolinking
  cd build/generated/autolinking
  touch autolinking.json
   # Use jq to convert output to Json and echo into autolinking.json
  echo "$op" | jq '.' > autolinking.json
  echo "autolinking success"
fi
