import NavBar from '../../components/ui/NavBar';
import React, { Component } from 'react';
/**
|--------------------------------------------------
| NavBar do Usuario Administrador, com os itens do 
| Menu passados por parametro
|--------------------------------------------------
*/
export default class AdmUserNavBar extends Component {
    itens = ['Livros', 'Notas']
    render() {
        return (
            <NavBar itensMenu={this.itens} />
        );
    }
}
