#!/bin/sh

set -e

npm i
pnpm update:version

pnpm build

cd dist/fast-plus
npm publish
cd -

cd internal/eslint-config
npm publish
cd -

cd internal/metadata
pnpm build
npm publish
cd -

echo "✅ Publish completed"
