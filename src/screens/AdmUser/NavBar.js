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
        { Nome: 'Home', Rota: '/' },
        { Nome: 'Livros', Rota: '/AdmUserLivros' },
        { Nome: 'Notas', Rota: '/AdmUserNotas' }
    ]
    render() {
        return (
            <NavBar _itensMenu={this.itensMenu} />
        );
    }
}
