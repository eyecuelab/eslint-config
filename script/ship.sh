#!/bin/bash

set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"

cd "$script_dir"

./pack.sh

cd ..

npm publish

cd react

npm publish
