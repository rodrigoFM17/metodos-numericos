import { useEffect, useState } from 'react'
import MethodTable from '../../components/MethodTable/MethodTable'
import { IterationsData, falsePositionMethod } from '../../services/MetodoFalsaPosicion'
import './FalsaPosicion.css'

type methodData = {
    root: number | null,
    iterations: IterationsData[]
}

export default function FalsaPosicion() {

    const headers = ["a", "b","fa", "fb", "xi","fxi", "f(a)*f(xr)", "e"]

    const [methodData, setMethodData] = useState<methodData>({
        root: 0,
        iterations: []
    })
    function fx(x: number): number {
        return x ** 3 - 2 * x - 5;
    }

    useEffect(()=> {
        setMethodData(falsePositionMethod(fx,2,3))
    },[])

    useEffect(()=> {
        console.log(methodData)
    },[methodData])

    return(
        <section className='falsa-posicion'>

            <h1>Falsa Posicion</h1>

            <MethodTable headers={headers} methodData={methodData.iterations}/>
        </section>
    )
}