import logo1 from 'media/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <ul className="navbar">
                <li>
                    <Link to= '/index' >
                        <div>
                            <img className="logo" src={logo1} alt="imagen 2" />
                        </div>
                    </Link>
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

    )
};

export default Header;