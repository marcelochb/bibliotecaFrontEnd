import React, { Component } from 'react';
import api from '../../../services/api';

class ComponetUserNotas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titulo: '',
            autor: '',
            editora: '',
            errorMessage: '',
            resultLivro: [],
            resultNota: [],
            nota: '',
            livroId: ''
        }


        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = () => {
        this.fetchDataLivro()
        this.fetchDataNota()
    };


    fetchDataLivro = () => {
        api.get('projects/livrosnotas')
            .then(response => { return response.data })
            .then(data => {
                this.setState({
                    resultLivro: data.livros
                })
            })
            .catch(result => {
                this.setState({ errorMessage: result.Error })
            })
            ;

    };

    fetchDataNota = () => {
        api.get('projects/notas')
            .then(response => { return response.data })
            .then(data => {
                this.setState({
                    resultNota: data.notas
                })
            });

    };


    deletarNota = (id) => {
        api.delete('projects/nota/' + id)
            .then(result => this.setState({ errorMessage: result.Error }))
            .catch(e => {
                this.setState({ errorMessage: e.message })
                this.fetchDataLivro();
            });
    }



    salvarNota = () => {
        const data = { nota: this.nota, livroId: this.state.livroId };
        api.post('projects/notas', data)
            .then(result => {
                this.setState({ errorMessage: result.Error });
                this.fetchDataLivro();
                this.fetchDataNota();
            })
            .catch(e => {
                this.setState({ errorMessage: e.message })
            });
        this.limpaCampos();
    };


    handleSubmit(e) {
        e.preventDefault();
    }

    limpaCampos() {
        document.getElementById('titulo').value = '';
        document.getElementById('autor').value = '';
        document.getElementById('nota').value = '';
        this.setState({
            titulo: '',
            autor: '',
            editora: '',
            livroId: ''
        })

    }
    novaNota(pLivroId, pTitulo, pAutor) {
        document.getElementById('titulo').value = pTitulo;
        document.getElementById('autor').value = pAutor;
        this.setState({ livroId: pLivroId });
    }


    render() {
        return (
            <div>
                {
                    this.state.errorMessage ? (
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{this.state.errorMessage}</strong>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>) : ''
                }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row align-items-center">
                        <div className="col-auto">
                            <input type="text" className="form-control mb-2" id="titulo" placeholder="Titulo do Livro" readOnly />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control mb-2" id="autor" placeholder="Autor do Livro" readOnly />
                        </div>
                        <div className="col-auto">
                            <input type="number" onChange={e => this.nota = e.target.value} className="form-control mb-2" id="nota" placeholder="Avaliar livro" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-2" onClick={this.salvarNota}>Salvar</button>
                        </div>
                    </div>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Titulo</th>
                                <th scope="col">Autor</th>
                                <th scope="col">Editora</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.resultLivro.map((item) => {
                                    return (
                                        <tr key={item._id}>
                                            <td>{item.titulo}</td>
                                            <td>{item.autor}</td>
                                            <td>{item.editora}</td>
                                            <td>
                                                <button type="submit" className="btn btn-danger" onClick={() => this.novaNota(item._id, item.titulo, item.autor)}>
                                                    Avaliar
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>


                    <h1>Notas atribuidas</h1>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Titulo</th>
                                <th scope="col">Autor</th>
                                <th scope="col">nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.resultNota.map((item) => {
                                    return (
                                        <tr key={item._id}>
                                            <td>{item.livro.titulo}</td>
                                            <td>{item.livro.autor}</td>
                                            <td>{item.nota}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>









                </form>
            </div>


        );
    }
}

export default ComponetUserNotas;