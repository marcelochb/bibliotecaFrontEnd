import React, { Component } from 'react';
import List from '../../ui/List';

class ComponetUserNotasList extends Component {
    listCampos = ['Titulo do Livro', 'Autor', 'Nota']
    render() {
        return (
            <div>
                <List _listCampos={this.listCampos} />
            </div>
        );
    }
}

export default ComponetUserNotasList;