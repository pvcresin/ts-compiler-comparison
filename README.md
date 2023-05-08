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
export class A {
}
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
export class A {
}
const a = new A();
console.log(`"foo" in a = ${"foo" in a}`);
```

swc.mjs

```javascript
export class A {
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
"foo" in a = false
```
