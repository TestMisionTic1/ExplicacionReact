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
                <img className="logo" src={logo1} alt="imagen 2"/>
            </li>
            <li>
                <button className="button mainButton"><i className="fas fa-plus"></i> Nuevo post</button>
            </li>
            <li>
                <div className="buscar " >
                    <input placeholder="Buscar una raza" type="text" name="" id=""/>
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
            <li className="breedCard">
                <div className="contenedorImagen">
                    <img src={Pitbull} alt="Pitbull"/>
                </div>
                <span className="breedTitle">
                    Pitbull
                </span>
                <div className="breedTitleComment">
                    <span className="espacio">
                        <i className="fas fa-heart heartRed"></i>
                        150
                    </span>
                    <span className="espacio">
                        <i className="far fa-comment commentwhite"></i>
                        1.5K
                    </span>
                    <span className="espacio">
                        <i className="fas fa-eye commentwhite"></i>
                        120
                    </span>
                </div>
            </li>
            <li className="breedCard">
                <div className="contenedorImagen">
                    <img src={americanBully} alt="American Bully"/>
                </div>
                <span className="breedTitle">
                    American Bully
                </span>
                <div className="breedTitleComment">
                    <span className="espacio">
                        <i className="fas fa-heart heartRed"></i>
                        450
                    </span>
                    <span className="espacio">
                        <i className="far fa-comment commentwhite"></i>
                        1.1K
                    </span>
                    <span className="espacio">
                        <i className="fas fa-eye commentwhite"></i>
                        850
                    </span>
                </div>
            </li>
        </ul>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
