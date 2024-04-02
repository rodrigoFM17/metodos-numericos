import './Home.css'
import calculator from '../../assets/calculator-solid.svg'
import Expressions from '../../components/Expression/Expression'
import { useState } from 'react'
import {ITerm} from '../../models/Term'

const createFunctions = (expression: ITerm[]) => {

    expression.forEach(expression => {
        if(expression.type === 'algebraic' && !expression.function){
            expression.function = (argument: number) => {
                return (expression.coefficient * argument) ^ expression.coefficient 
            }
        }
        
    })
}

export default function Home () {

    const [expression, SetExpression] = useState<ITerm[]>([])

    const getData = (e:any) => {
        e.preventDefault()
        const method = document.querySelector("input[name='metodo']:checked") as HTMLInputElement
        console.log(method.value)
        if (!expression.length) {
            alert('no ha ingresado la funcion')
        } else {
            createFunctions(expression)
        }

    }

    return (<section className='home' >
            
            <h2>Metodos Numericos</h2>
            <form className='selection-method' aria-required onSubmit={getData}>

                <Expressions expression={expression} SetExpression={SetExpression}/>
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

                <button>
                    <img src={calculator} alt="" />
                </button>

            </form>

            <figure>
                
                <iframe src="https://www.geogebra.org/calculator" >

                </iframe>
            </figure>        
    </section>)
}