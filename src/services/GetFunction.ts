import { ITerm } from "../models/ITerm"

export const createFunctions = (expression: ITerm[]) => {

    expression.forEach(expression => {
        if(expression.type === 'algebraic' && !expression.function){
            expression.function = (argument: number) => {
                return expression.exponent ? 
                expression.coefficient * Math.pow(argument, expression.exponent)
                : 
                expression.coefficient * argument
            }
        }
    })
}

export const evaluateFunction = (expression: ITerm[], argument: number) => {

    let result = 0
    expression.forEach(term => {
        result += term.function ? term.function(argument) : term.coefficient    
    })
    return result
}

export const stringifyFunction = (expression: ITerm[]) => {

}