import NavBar from '../../components/ui/NavBar';
import React, { Component } from 'react';
/**
|--------------------------------------------------
| NavBar do Usuario Administrador, com os itens do 
| Menu passados por parametro
|--------------------------------------------------
*/
export default class AdmUserNavBar extends Component {
    itensMenu = [
        { Nome: 'Home', Rota: '/admuser' },
        { Nome: 'Livros', Rota: '/livros' },
        { Nome: 'Notas', Rota: '/notas' }
    ]
    render() {
        return (
            <NavBar _itensMenu={this.itensMenu} _usuario={localStorage.getItem('usuario')} />
        );
    }
}
