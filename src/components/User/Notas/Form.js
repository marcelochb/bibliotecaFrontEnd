import React, { Component } from 'react';
import Form from '../../ui/Form';

class ComponetUserNotasForm extends Component {
    formItens = [
        { label: 'Titulo', tipo: 'text', placeholder: 'Titulo do Livro' },
        { label: 'Nota', tipo: 'number', placeholder: 'atribua uma nota' },
    ]
    render() {
        return (
            <div>
                <Form _formItens={this.formItens} _botaoTexto={'Salvar'} />
            </div>
        );
    }
}

export default ComponetUserNotasForm;