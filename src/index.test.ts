import { deepEqual } from "node:assert/strict";
import test from "node:test";

function act(input: number[]) {
  if (input[0] === 2) {
    input[0] = 4;
  }

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

// 1**1 = 1

// 2**2 = 2*2 = 4

// 3**3 = 3*3*3 = 27

test("Factor the number 2", () => {
  const result = act([2]);

  deepEqual(result, [4]);
});
