npx esbuild "src\index.ts" --bundle --outfile=script.js --target=es6 --format=iife --global-name=macroCmds
cat script.js | npx uglifyjs > script.min.js