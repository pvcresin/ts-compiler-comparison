# tsc-babel-esbuild-swc-diff

input.mts

```typescript
export class A {
  // foo type
  foo?: string;
}

const a = new A();

console.log(`"foo" in a = ${"foo" in a}`);
```

`yarn` and `yarn build`

tsc.mjs

```javascript
export class A {}
const a = new A();
console.log(`"foo" in a = ${"foo" in a}`);
```

babel.mjs

```javascript
export class A {}
const a = new A();
console.log(`"foo" in a = ${"foo" in a}`);
```

esbuild.mjs

```javascript
export class A {}
const a = new A();
console.log(`"foo" in a = ${"foo" in a}`);
```

swc.mjs

```javascript
function _define_property(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
export class A {
  constructor() {
    // foo type
    _define_property(this, "foo", void 0);
  }
}
const a = new A();
console.log(`"foo" in a = ${"foo" in a}`);
```

`yarn execute`

```sh
$ node dist/tsc.mjs
"foo" in a = false

$ node dist/babel.mjs
"foo" in a = false

$ node dist/esbuild.mjs
"foo" in a = false

$ node dist/swc.mjs
"foo" in a = true
```
