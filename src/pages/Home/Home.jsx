import './Home.css'

export default function Home () {

    return (<section className=''>
        <article>
            <h2>Metodos Numericos</h2>

            <form action="">
                <label>
                    <input type="radio" name='metodo' />
                    Biseccion
                </label>
                <label>
                    <input type="radio" name='metodo'/>
                    Falsa posicion
                </label>
                <label>
                    <input type="radio" name='metodo'/>
                    Secante
                </label>
                <label>
                    <input type="radio" name='metodo'/>
                    Newton Raphson
                </label>
            </form>
        </article>
    </section>)
}