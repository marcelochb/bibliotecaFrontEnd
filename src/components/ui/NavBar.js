import React from 'react';
import { Link } from 'react-router-dom';

/**
|--------------------------------------------------
| Componente UI NavBar - Barra de navegação do site
| Recebendo como parametros os itens do Menu
|--------------------------------------------------
*/
const NavBar = (props) => {

    return (
        < div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded my-2">
                <a className="navbar-brand" href="#">Bliblioteca</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {props._itensMenu.map((item) => {
                            return (
                                <li className="nav-item">
                                    <Link className="nav-link" to={item.Rota}>{item.Nome}</Link>
                                </li>

                            );
                        }
                        )}
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <label className="text-light mr-3">{props._usuario}</label>
                        <button className="btn btn-danger my-2 my-sm-0 btn-sm" onClick={() => localStorage.removeItem('token')} type="submit">Logout</button>
                    </form>
                </div>
            </nav>
        </div >
    );

};

export default NavBar;