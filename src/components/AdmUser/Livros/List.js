import React, { Component } from 'react';
import List from '../../ui/List';

class ComponetAdmUserLivrosList extends Component {
    listCampos = ['Titulo', 'Autor', 'Editora']
    render() {
        return (
            <div>
                <List _listCampos={this.listCampos} />
            </div>
        );
    }
}

export default ComponetAdmUserLivrosList;