import {useState} from 'react'
const Ubicacion = () => {
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
   
    return(
        <>
            <div className="ubicacion">
                <h2>Ubicación</h2>
                <p>Por momento vamos a poner el boton que suma y restra productos en este sector</p>
                <div id="1" className="card">
                    <img className="img-card" src="../img/Lemonpie.jpg"/>
                    <h2 className="card-nombre">Lemonpie</h2>
                    <p className="card-p">Sableé de vainilla, curd de limón, y merengue italiano.</p>
                    <div className="sumar-restar">
                        <button onClick={resta} className="boton">-</button>
                        <p>{rate}</p>
                        <button onClick={suma} className="boton">+</button>
                    </div> 
                </div>
            </div>
        </>
    );
}

export default Ubicacion