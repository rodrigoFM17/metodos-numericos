import './Home.css'
import calculator from '../../assets/calculator-solid.svg'
import { useContext} from 'react'
import Graphic from '../../components/Graphic/Graphic'
import ExpressionContext from '../../context/ExpressionContext'
import { compile, derivative } from 'mathjs'
import bisectionMethod from '../../services/MetodoBiseccion'
import falsePositionMethod from '../../services/MetodoFalsaPosicion'


export default function Home () {

    const {expression, setExpression} = useContext(ExpressionContext)

    const derivate = (fn:string) => {
        try{
            return derivative(fn, "x").toString()
        } catch(e: any){
            return ""
        }
    }

    const evaluateFunction = (fn:string) => {
        let auxfn
        try{
            compile(fn)
            auxfn = fn
        } catch (e:any){
            auxfn = ''
        } finally {
            return auxfn
        }
    }

    const setFunction = (e:any) => {
        const string = e.target.value
        const newFn = {
            fn: evaluateFunction(string),
            derivative: derivate(string),
        }
        setExpression(newFn)
    }

    const calculate = () => {
        const func = expression;
        const {root, functions} = bisectionMethod(func, 2, 3);
        //const {root, functions} = falsePositionMethod(func, 2, 3);
    }

    return (<section className='home' >
            
            <h2>Metodos Numericos</h2>
            <form className='selection-method' aria-required onSubmit={() => {}}>

                {/* <Expressions expression={expression} SetExpression={SetExpression}/> */}
                <input type="text" id='funcion' onInput={setFunction} placeholder='ingrese la funcion' required/>
                <Graphic expression={expression}/>
                <input id='biseccion' type="radio" name='metodo' value="biseccion" />
                <label htmlFor='biseccion'>
                    Biseccion
                </label>
                <input id="falsa" type="radio" name='metodo' value="falsa" />
                <label htmlFor='falsa'>
                    Falsa posicion
                </label>
                <input id='secante' type="radio" name='metodo' value="secante" required/>
                <label htmlFor='secante'>
                    Secante
                </label>
                <input id='newton' type="radio" name='metodo' value="newton"/>
                <label htmlFor='newton'>
                    Newton Raphson
                </label>

                <button onClick={}>
                    <img src={calculator} alt="" />
                </button>

            </form>
     
    </section>)
}