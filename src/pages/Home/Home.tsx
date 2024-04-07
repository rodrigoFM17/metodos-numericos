import './Home.css'
import calculator from '../../assets/calculator-solid.svg'
import { useContext, useEffect, useState} from 'react'
import Graphic from '../../components/Graphic/Graphic'
import ExpressionContext from '../../context/ExpressionContext'
import { compile, derivative } from 'mathjs'
import { navigate } from 'wouter/use-browser-location'

export default function Home () {

    const {expression, setExpression} = useContext(ExpressionContext)
    const [method, setMethod] = useState(null)

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

    const selectMethod = ({target}: any) => {
        const {value} = target
        setMethod(value)
    }

    const submitMethodData = (e: any) => {
        e.preventDefault()
        const inputa = document.querySelector("#a") as HTMLInputElement
        if(method !== "newton") {
            const inputb = document.querySelector("#b") as HTMLInputElement
            const a = Number.parseFloat(inputa.value)
            const b = Number.parseFloat(inputb.value)
            expression.interval = [a, b]
        } else {
            expression.interval = [Number.parseFloat(inputa.value), 0]
            expression.compiledDerivative = compile(expression.derivative)
        }
        expression.compiledFn = compile(expression.fn)
        console.log(expression)
        setExpression(expression)
        navigate(`/${method}`)
    }

    useEffect(()=> {
        console.log(expression)
    },[expression])

    return (<section className='home' >
            
            <h2>Metodos Numericos</h2>
            <form className='selection-method' aria-required onSubmit={submitMethodData}>

                {/* <Expressions expression={expression} SetExpression={SetExpression}/> */}
                <input type="text" id='funcion' onInput={setFunction} placeholder='ingrese la funcion' required/>
                <Graphic expression={expression}/>
                <input id='biseccion' type="radio" name='metodo' value="biseccion" onInput={selectMethod}/>
                <label htmlFor='biseccion'>
                    Biseccion
                </label>
                <input id="falsa" type="radio" name='metodo' value="falsa-posicion" onInput={selectMethod}/>
                <label htmlFor='falsa'>
                    Falsa posicion
                </label>
                <input id='secante' type="radio" name='metodo' value="secante" required onInput={selectMethod}/>
                <label htmlFor='secante'>
                    Secante
                </label>
                <input id='newton' type="radio" name='metodo' value="newton" onInput={selectMethod}/>
                <label htmlFor='newton'>
                    Newton Raphson
                </label>

                {
                    method && 
                    <fieldset className='interval-input'>
                        <h3>Ingrese el intervalo</h3>
                        <label>
                            a: <input type="number" id='a' required step="0.1"/>
                        </label>
                        <label>
                            b: <input type="number" id='b' required step="0.1"/>
                        </label>
                    </fieldset>
                }


                <button>
                    <img src={calculator} alt="" />
                </button>

            </form>
     
    </section>)
}