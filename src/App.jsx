import './styles/styles.css';
import Pitbull from './media/pexels-gilberto-reyes-800330.jpg'
import americanBully from './media/pexels-red-light-films-&-photography-4052898.jpg'
import logo1 from './media/logo.png'

function App() {
    return (
        <div className="App">
            <header>
                <ul className="navbar">
                    <li>
                        <img className="logo" src={logo1} alt="imagen 2" />
                    </li>
                    <li>
                        <button className="button mainButton"><i className="fas fa-plus"></i> Nuevo post</button>
                    </li>
                    <li>
                        <div className="buscar " >
                            <input placeholder="Buscar una raza" type="text" name="" id="" />
                            <i className="fas fa-search button iconoBusqueda"></i>
                        </div>

                    </li>
                    <li>
                        <button className="button secondaryButton">Login</button>
                    </li>
                    <li>
                        <button className="button mainButton">Registro</button>
                    </li>

                </ul>

            </header>
            <main>
                <section></section>
                <h1 className="tituloPrincipal">RAZAS DE PERROS</h1>
                <ul className="breedCardContainer">
                    <CardRazasPerros nombreRazas = 'Pitbull' imagen = {Pitbull} descripcion ='Pitbull' likes = '150' comment = '1.5K' view = '120'/>
                    <CardRazasPerros nombreRazas = 'American Bully' imagen = {americanBully} descripcion ='American Bully' likes = '180' comment = '2.0K' view = '220'/>
                </ul>
                <section></section>
            </main>
            <footer>

            </footer>
        </div>
    );
}
function CardRazasPerros({nombreRazas, imagen, descripcion, likes, comment, view }) {
    return (
        <li className="breedCard">
            <div className="contenedorImagen">
                <img src={imagen} alt= {descripcion} />
            </div>
            <span className="breedTitle">
                {nombreRazas}
            </span>
            <div className="breedTitleComment">
                <span className="espacio">
                    <i className="fas fa-heart heartRed"></i>
                    {likes}
                </span>
                <span className="espacio">
                    <i className="far fa-comment commentwhite"></i>
                    {comment}
                </span>
                <span className="espacio">
                    <i className="fas fa-eye commentwhite"></i>
                    {view}
                </span>
            </div>
        </li>
    )
}

export default App;
