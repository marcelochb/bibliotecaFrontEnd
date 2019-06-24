import React, { Component } from 'react';
import ComponetAdmUserLivrosForm from '../../components/AdmUser/Livros/Form';
import ComponetAdmUserLivrosList from '../../components/AdmUser/Livros/List';

class ScreenAdmUserLivros extends Component {
    render() {
        return (
            <div>
                <ComponetAdmUserLivrosForm />
                <ComponetAdmUserLivrosList />
            </div>
        );
    }
}

export default ScreenAdmUserLivros;