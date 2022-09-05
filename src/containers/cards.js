import Card from "../components/card"
const Cards = () => {
    return(
        <>
            <div className="conteiner-card">
                <Card 
                    id={1}
                    imagen="../img/tortadiablo.jpg"
                    nombre="Torta diablo"
                    ingredientes="Masa húmeda de chocolate con almíbar de amarula, crema de chocolate, pasta praliné de avellanas."
                />

                <Card 
                    id={2}
                    imagen="../img/Cheesecake-de-chocolate-blanco-y-frutos-rojos.jpg"
                    nombre="Cheesecake de chocolate blanco y frutos rojos "
                    ingredientes="Base de galletas caseras, crema de queso y chocolate blanco, mermelada casera de frutos rojos, ganache de chocolate blanco para la decoración."
                />

                <Card 
                    id={3}
                    imagen="../img/Lemonpie.jpg"
                    nombre="Lemonpie"
                    ingredientes="No se de que esta hecho"
                />

                <Card
                    id={4}
                    imagen="../img/Pavlova.jpg"
                    nombre="Pavlova"
                    ingredientes="Merengue, dulce casero de frutos rojos, crema chantilly, frutillas, frambuesas, y arándanos."
                />

            </div>
        </>
    )
}

export default Cards