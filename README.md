# Demo of ESM error

```
npm i
npm run main
```

produces the following output (in which for readability I've search-and-replaced my local repo root with `$ROOTDIR`)

```
> playground@1.0.0 main
> npx ts-node -P tsconfig.json src/main.ts

$ROOTDIR/node_modules/ts-node/dist/index.js:851
            return old(m, filename);
                   ^
Error [ERR_REQUIRE_ESM]: require() of ES Module $ROOTDIR/node_modules/spatialmerge/dist/spatialmerge.cjs.js from $ROOTDIR/src/main.ts not supported.
spatialmerge.cjs.js is treated as an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which declares all .js files in that package scope as ES modules.
Instead rename spatialmerge.cjs.js to end in .cjs, change the requiring code to use dynamic import() which is available in all CommonJS modules, or change "type": "module" to "type": "commonjs" in $ROOTDIR/node_modules/spatialmerge/package.json to treat all .js files as CommonJS (using .mjs for all ES modules instead).

    at Object.require.extensions.<computed> [as .js] ($ROOTDIR/node_modules/ts-node/dist/index.js:851:20)
    at Object.<anonymous> ($ROOTDIR/src/main.ts:3:24)
    at Module.m._compile ($ROOTDIR/node_modules/ts-node/dist/index.js:857:29)
    at Object.require.extensions.<computed> [as .ts] ($ROOTDIR/node_modules/ts-node/dist/index.js:859:16)
    at phase4 ($ROOTDIR/node_modules/ts-node/dist/bin.js:466:20)
    at bootstrap ($ROOTDIR/node_modules/ts-node/dist/bin.js:54:12)
    at main ($ROOTDIR/node_modules/ts-node/dist/bin.js:33:12)
    at Object.<anonymous> ($ROOTDIR/node_modules/ts-node/dist/bin.js:579:5) {
  code: 'ERR_REQUIRE_ESM'
}
```
