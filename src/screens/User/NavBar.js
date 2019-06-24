import NavBar from '../../components/ui/NavBar';
import React, { Component } from 'react';
/**
|--------------------------------------------------
| NavBar do Usuario comum, com os item do menu
| passados por paramentro.
|--------------------------------------------------
*/
export default class UserNavBar extends Component {
    itensMenu = [
        { Nome: 'Notas', Rota: '/UserNotas' }
    ]
    render() {
        return (
            <NavBar _itensMenu={this.itensMenu} />
        );
    }
}
