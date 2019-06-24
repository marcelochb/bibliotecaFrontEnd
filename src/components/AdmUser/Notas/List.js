import React, { Component } from 'react';
import List from '../../ui/List';

class ComponentAdmUserNotasList extends Component {
    listCampos = ['Titulos', 'Media de Notas']
    render() {
        return (
            <div>
                <List _listCampos={this.listCampos} />
            </div>
        );
    }
}

export default ComponentAdmUserNotasList;