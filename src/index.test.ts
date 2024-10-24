import { deepEqual } from "node:assert/strict";
import test from "node:test";

function act(input: number[]) {
  return input;
}

test("Zero test case", () => {
  const input: number[] = [];

  const result = act(input);

  deepEqual(result, []);
});

test("One test case", () => {
  const result = act([1]);

  deepEqual(result, [1]);
});
