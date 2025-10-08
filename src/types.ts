export interface Constant {
    amount: number;
}

export type EvaluableParam = Constant;

export interface Sum {
    type: "sum";
    parameters: EvaluableParam[];
}

export interface Negate {
    type: "negate";
    value: EvaluableParam;
}

export interface Multiply {
    type: "multiply";
    factor1: EvaluableParam;
    factor2: EvaluableParam;
}

export interface Divide {
    type: "divide";
    dividend: EvaluableParam;
    divisor: EvaluableParam;
}

export type Expression = Sum | Multiply | Negate | Divide;

export interface EvaluationResult {
    amount: number;
}
