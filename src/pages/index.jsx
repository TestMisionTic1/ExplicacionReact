import CardRazasPerros from "componets/CardRazasPerros";
import Pitbull from 'media/pexels-gilberto-reyes-800330.jpg'
import americanBully from 'media/pexels-red-light-films-&-photography-4052898.jpg'


function Index() {
    return (
        <section>
            <h1 className="tituloPrincipal">RAZAS DE PERROS</h1>
            <ul className="breedCardContainer">
                <CardRazasPerros nombreRazas='Pitbull' imagen={Pitbull} descripcion='Pitbull' likes='150' comment='1.5K' view='120' linkperros='/pitbull' />
                <CardRazasPerros nombreRazas='American Bully' imagen={americanBully} descripcion='American Bully' likes='180' comment='2.0K' view='220' linkperros='/americanbully' />
            </ul>
        </section>
    )
}

export default Index;
