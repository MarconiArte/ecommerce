import {useState} from 'react'
import Products from './products'
const BtnStock = ({initial, stock, onAdd}) => {
    const [rate, setRate] = useState(initial)

    const suma = () => {
      setRate(rate+1)     
    }

    const resta = () => {
        setRate(rate-1) 
    }

    

    return(
            <>
            <div className='btn-stock'>
                <button onClick={resta} disabled={rate<=1} className="boton menosmas">-</button>
                    <p>{rate}</p>
                <button onClick={suma} disabled={rate>=stock} className="boton menosmas">+</button>
                <button onClick={() => onAdd(rate)} className='boton'>Añadir al carrito</button>
            </div>               
            </>
            
    )
                    
}

export default BtnStock







