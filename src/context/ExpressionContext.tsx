import { createContext, useState } from "react";

type fn = {
    expression: {
        fn: string,
        derivative: string
    },
    setExpression: any,
}
const ExpressionContext = createContext({} as fn)

export default ExpressionContext

export function ExpressionContextProvider({children}: any){

    const [expression, setExpression] = useState({fn:'', derivative: ''})
    return <ExpressionContext.Provider value={{expression, setExpression}}>
        {children}
    </ExpressionContext.Provider>
}
