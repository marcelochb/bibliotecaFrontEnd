import React, { Component } from 'react';
import Form from '../../components/ui/Form';

class LivrosForm extends Component {
    formItens = [
        { label: 'Titulo', tipo: 'Text', placeholder: 'Titulo do livro' },
        { label: 'Autor', tipo: 'Text', placeholder: 'Autor do livro' },
        { label: 'Editora', tipo: 'Text', placeholder: 'Editora do livro' },
    ]
    render() {
        return (
            <div>
                <Form _formItens={this.formItens} _botaoTexto={'Salvar'} />
            </div>
        );
    }
}

export default LivrosForm;