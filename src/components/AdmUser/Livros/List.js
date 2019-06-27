import React, { Component } from 'react';
import List from '../../ui/List';

class ComponetAdmUserLivrosList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            listData: []
        }
    }

    componentDidMount = () => {
        this.fetchData()
    };


    fetchData = () => {
        const requestInfo = {
            method: 'GET',
            headers: new Headers({
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }),
        };

        fetch('http://localhost:4000/projects/livros', requestInfo)
            .then(res => { return res.json() })
            .then(result => { return result })
            .then(livro => {
                this.setState({
                    result: livro.livro
                })
            });

    };

    render() {
        return (
            <div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Titulo</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Editora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.result.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.titulo}</td>
                                        <td>{item.autor}</td>
                                        <td>{item.editora}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ComponetAdmUserLivrosList;