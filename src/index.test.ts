import { deepEqual } from "node:assert/strict";
import test from "node:test";

const input: number[] = [];

function act(input: number[]) {
  return input;
}

test("Zero test case", () => {
  const result = act(input);

  deepEqual(result, []);
});
