# tsc-babel-esbuild-swc-diff

- Issue: https://github.com/swc-project/swc/issues/7366

## input.mts

```typescript
export class A {
  // foo type
  foo?: string;
}

const a = new A();

console.log(`"foo" in a = ${"foo" in a}`);
```

## build

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

## execute

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
