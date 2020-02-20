# repo issues

https://github.com/nrwl/nx/issues/2496

```console
  npx nx build react-lib
```

```console
Bundling...
TypeError: /Users/jimmy/Desktop/myworkspace/libs/react-lib/src/index.ts: Property name expected type of string but got null
    at validate (/Users/jimmy/Desktop/myworkspace/node_modules/@babel/types/lib/definitions/utils.js:159:13)
    at Object.validate (/Users/jimmy/Desktop/myworkspace/node_modules/@babel/types/lib/definitions/utils.js:196:7)
    at validateField (/Users/jimmy/Desktop/myworkspace/node_modules/@babel/types/lib/validators/validate.js:24:9)
    at validate (/Users/jimmy/Desktop/myworkspace/node_modules/@babel/types/lib/validators/validate.js:17:3)
    at builder (/Users/jimmy/Desktop/myworkspace/node_modules/@babel/types/lib/builders/builder.js:38:27)
    at Object.Identifier (/Users/jimmy/Desktop/myworkspace/node_modules/@babel/types/lib/builders/generated/index.js:334:31)
    at /Users/jimmy/Desktop/myworkspace/node_modules/regenerator-transform/lib/hoist.js:32:29
    at Array.forEach (<anonymous>)
    at varDeclToExpr (/Users/jimmy/Desktop/myworkspace/node_modules/regenerator-transform/lib/hoist.js:29:23)
    at exit (/Users/jimmy/Desktop/myworkspace/node_modules/regenerator-transform/lib/hoist.js:51:20) {
  code: 'PLUGIN_ERROR',
  pluginCode: 'BABEL_TRANSFORM_ERROR',
  plugin: 'babel',
  hook: 'transform',
  id: '/Users/jimmy/Desktop/myworkspace/libs/react-lib/src/index.ts'
```
