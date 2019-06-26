import React, { Component } from 'react';


class ComponetAdmUserLivrosForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titulo: '',
            autor: '',
            editora: ''
        }


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleSubmit.bind(this);
    }

    handleTextChange(e) {

    }


    handleSubmit(e) {
        e.preventDefault();

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row align-items-center">
                        <div className="col-auto">
                            <input type="text" value={this.state.titulo} onChange={e => this.titulo = e.target.value} className="form-control mb-2" id="inlineFormInput" placeholder="Titulo do Livro" />
                        </div>
                        <div className="col-auto">
                            <input type="text" onChange={e => this.autor = e.target.value} className="form-control mb-2" id="inlineFormInput" placeholder="Autor do Livro" />
                        </div>
                        <div className="col-auto">
                            <input type="text" onChange={e => this.editora = e.target.value} className="form-control mb-2" id="inlineFormInput" placeholder="Editora do Livro" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-2">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ComponetAdmUserLivrosForm;