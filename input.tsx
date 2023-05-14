import React from "react";

export const c = <h1>component</h1>;

export class A {
  // foo type
  foo?: string;
}

const a = new A();

console.log(`"foo" in a = ${"foo" in a}`);
