import {useState} from 'react'
const BtnStock = () => {
    const [rate, setRate] = useState(0)

    const suma = () => {
        if (rate < 5) {
            setRate(rate+1)
        }
    }

    const resta = () => {
    if (rate > 0) {
        setRate(rate-1)
        }
    }

    const alerts = () =>{
        alert('SE AÑADIO AL CARRITO EL PRODUCTO')
    }

    return(
            <>
            <div className='btn-stock'>
                <button onClick={resta} className="boton menosmas">-</button>
                    <p>{rate}</p>
                <button onClick={suma} className="boton menosmas">+</button>
                <button onClick={alerts} className='boton'>Añadir al carrito</button>
            </div>               
            </>
            
    )
                    
}

export default BtnStock







