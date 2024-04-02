import { ITerm } from '../../models/Term'
import './Term.css'

type Props = {
    term: ITerm
}

export default function Term ({term}: Props) {

    const setCoefficient = (e: any) => {
        const {value} = e.target
        if(value)
            term.coefficient = Number.parseInt(value)
    }
    const setExponent = (e: any) => {
        const {value} = e.target
        if(value)
            term.exponent = Number.parseInt(value)
        console.log(value)
    }


    return <fieldset className='term'>
        {
            term.type === "algebraic" ? 
            <>
                <input type="number" min={1} defaultValue={term.coefficient} onChange={setCoefficient} required/>
                <span>x</span>
                <input name='exponent' pattern='\d'  type="number" min={1} defaultValue={term.exponent} onInput={setExponent} required/>
            </>
            : 
            <input type='number' name='constant' min={1} defaultValue={term.coefficient} onInput={setCoefficient} required/>

        }
        
    </fieldset>
}