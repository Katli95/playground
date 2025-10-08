import type { EvaluationResult, Expression } from "./types";
import { assertUnreachable } from "./utils";

interface ExpressionEvaluationParams {
    expression: Expression;
}

export async function evaluateExpression({ expression }: ExpressionEvaluationParams): Promise<EvaluationResult> {
    let amount: number;

    switch (expression.type) {
        case "sum": {
            const params = expression.parameters;
            amount = params.reduce((acc, curr) => acc + curr.amount, 0);
            break;
        }

        case "negate": {
            const value = expression.value;
            amount = -value.amount;
            break;
        }

        case "multiply": {
            const [factor1, factor2] = [expression.factor1, expression.factor2];
            amount = factor1.amount * factor2.amount;
            break;
        }

        case "divide": {
            const [dividend, divisor] = [expression.dividend, expression.divisor];
            amount = dividend.amount / divisor.amount;
            break;
        }

        default:
            assertUnreachable(
                expression,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                `Unexpected expression parameter type: ${(expression as any | undefined)?.type}`
            );
    }

    return { amount };
}
