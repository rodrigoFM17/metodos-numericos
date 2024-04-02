import { ITerm } from "../../models/Term"
import Term from "../Term/Term"
import './Expression.css'
import xmark from '../../assets/xmark.svg'
import C from '../../assets/c-solid.svg'
import plus from '../../assets/plus-solid.svg'
import clear from '../../assets/clear.svg'
type Props = {
    expression: ITerm[],
    SetExpression: any,
}

export default function Expressions ({expression, SetExpression}: Props) {

    const addTerm =() => {
        expression.push({type: "algebraic",coefficient: 1, exponent: 1})
        SetExpression([...expression])
        console.log(expression)
    }

    const addConstant =() => {

        const constant = expression.find(expression => expression.type === "constant")
        if(!constant){
            expression.push({type: "constant", coefficient: 1, exponent: 1})
            SetExpression([...expression])
            console.log(expression)
        } else {
            alert("ya hay una constante en la expresion")
        }
    }

    const deleteTerm = () => {
        
        expression.pop()
        SetExpression([...expression])
    }

    return <form action="expression" className="expression">

            <div>
                <button type="button" onClick={addTerm}>
                    <img src={plus} alt="+" />
                </button>
                <button type="button" onClick={deleteTerm}>
                    <img src={xmark} alt="x" />
                </button>
                <button type="button" onClick={addConstant}>
                    <img src={C} alt="c" />
                </button>
                <button type="button" onClick={() => SetExpression([])}>
                    <img src={clear} alt="clear" />
                </button>
            </div>
            <h2>Funcion: </h2>
                {
                    expression.map((term, index) => {
                    return <>
                        <Term term={term} key={"expression" + index} />
                        {index !== expression.length - 1 ? <span>+</span>: null}
                        
                    </>
                })
            }

        
        
        
    </form>
}