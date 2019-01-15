# math-random-test

Minimum reproduction for https://github.com/michaelrhodes/math-random/issues/4

Cloning this repo, running `npm i` and then `npm run build` results in:

```
> math-random-test@1.0.0 build /Users/pward/Development/personal/math-random-test
> webpack

Hash: cb8110d7b80ae3e3f765
Version: webpack 4.28.4
Time: 66ms
Built at: 2019-01-15 07:33:39
 1 asset
Entrypoint main = bundle.js
[0] ./src/index.js 75 bytes {0} [built]

ERROR in ./src/index.js
Module not found: Error: Can't resolve 'math-random' in '/Users/pward/Development/personal/math-random-test/src'
 @ ./src/index.js 3:15-37
npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! math-random-test@1.0.0 build: `webpack`
npm ERR! Exit status 2
npm ERR!
npm ERR! Failed at the math-random-test@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/pward/.npm/_logs/2019-01-15T13_33_39_573Z-debug.log
```

Changing the math.random dependency in package.json from 1.0.3 to 1.0.2 resolves
the issue.
