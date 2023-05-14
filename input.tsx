import React from "react";

export function Sample() {
  return <h1>Hello</h1>;
}

export class A {
  foo?: string;
}

const a = new A();

console.log(`"foo" in a = ${"foo" in a}`);
