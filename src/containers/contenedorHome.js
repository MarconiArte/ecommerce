import Cards from "./cards"
import Ubicacion from "../components/ubicacion"
const ContenedorHome = () => {
    return(
        <>
            <div className="conteiner-card">
                <Cards />
            </div>

            <Ubicacion />
        </>
    )
}

export default ContenedorHome