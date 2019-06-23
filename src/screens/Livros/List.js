import React, { Component } from 'react';
import List from '../../components/ui/List';

class LivrosList extends Component {
    listCampos = ['Titulo', 'Autor', 'Editora']
    render() {
        return (
            <div>
                <List _listCampos={this.listCampos} />
            </div>
        );
    }
}

export default LivrosList;