import './Home.css'
import calculator from '../../assets/calculator-solid.svg'
import { useContext, useEffect} from 'react'
import Graphic from '../../components/Graphic/Graphic'
import ExpressionContext from '../../context/ExpressionContext'
import { compile, derivative } from 'mathjs'
import { bisectionMethod } from '../../services/MetodoBiseccion'


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

    useEffect(()=> {
        function f(x: number): number {
            return x ** 3 - 2 * x - 5;
        }
        const {root, iterations} = bisectionMethod(f, 2, 3);
        if (root !== null) {
            console.log(`La raíz aproximada es: ${root.toFixed(6)}`);
        } else {
            console.log("No se pudo encontrar la raíz dentro de la tolerancia especificada.");
        }
        console.log("Datos de cada iteración:");
        iterations.forEach((data, index) => {
            console.log(`Iteración ${index + 1}: x1 = ${data.x1.toFixed(6)}, x2 = ${data.x2.toFixed(6)}, xp = ${data.xp.toFixed(6)}, fxp = ${data.fxp.toFixed(6)}, error = ${data.e.toFixed(6)}`);
        });
        
    }, [])

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

                <button>
                    <img src={calculator} alt="" />
                </button>

            </form>
     
    </section>)
}