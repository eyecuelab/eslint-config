#!/bin/bash

set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"

cd "$script_dir"

./pack.sh

cd ..

npm version patch
npm publish

cd react

npm version patch
npm publish
