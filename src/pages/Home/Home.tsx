import './Home.css'
import calculator from '../../assets/calculator-solid.svg'
import { useContext} from 'react'
import Graphic from '../../components/Graphic/Graphic'
import ExpressionContext from '../../context/ExpressionContext'
import { derivative } from 'mathjs'


export default function Home () {

    const {expression, setExpression} = useContext(ExpressionContext)

    const derivate = (fn:string) => {
        try{
            return derivative(fn, "x").toString()
        } catch(e: any){
            return ""
        }
    }

    const setFunction = (e:any) => {
        const string = e.target.value
        const newFn = {
            fn: string,
            derivative: derivate(string),
        }
        setExpression(newFn)
    }

    return (<section className='home' >
            
            <h2>Metodos Numericos</h2>
            <form className='selection-method' aria-required onSubmit={() => {}}>

                {/* <Expressions expression={expression} SetExpression={SetExpression}/> */}
                <input type="text" id='funcion' onInput={setFunction} placeholder='ingrese la funcion' required/>
                <Graphic expression={expression} />
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
     
    </section>)
}