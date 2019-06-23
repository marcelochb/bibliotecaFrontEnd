import React, { Component } from 'react';
import List from '../../components/ui/List';

class NotasList extends Component {
    listCampos = ['Titulo do Livro', 'Autor', 'Nota']
    render() {
        return (
            <div>
                <List _listCampos={this.listCampos} />
            </div>
        );
    }
}

export default NotasList;