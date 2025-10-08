import { test } from "vitest";
import { evaluateExpression } from "./src/evaluate.js";
import type { Divide, Multiply, Sum } from "./src/types.js";

test("1+2+3 = 6", async ({ expect }) => {
    const sum: Sum = { type: "sum", parameters: [{ amount: 1 }, { amount: 2 }, { amount: 3 }] };
    const res = await evaluateExpression({ expression: sum });
    expect(res.amount).toEqual(6);
});

test("6*6 = 36", async ({ expect }) => {
    const multiply: Multiply = { type: "multiply", factor1: { amount: 6 }, factor2: { amount: 6 } };
    const res = await evaluateExpression({ expression: multiply });
    expect(res.amount).toEqual(36);
});

test("1/2 = 0.5", async ({ expect }) => {
    const divide: Divide = { type: "divide", dividend: { amount: 1 }, divisor: { amount: 2 } };
    const res = await evaluateExpression({ expression: divide });
    expect(res.amount).toEqual(0.5);
});
