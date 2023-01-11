#!/bin/bash

set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"

cd "$script_dir"
cd ..

npm i

cd react

npm i
npm run build
