
export interface ITerm {
    type: "constant" | "algebraic"
    coefficient: number,
    exponent: number,
    function?: (argument: number) => number
}