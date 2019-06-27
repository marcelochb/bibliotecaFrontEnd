import React, { Component } from 'react';
import ComponentAdmUserNotasList from '../../components/AdmUser/Notas/List';

class ScreenAdmUserNotas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: '',
            resultNota: [],
        }
    }







    componentDidMount = () => {
        this.fetchDataNota()
    };


    fetchDataNota = () => {
        const requestInfo = {
            method: 'GET',
            headers: new Headers({
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }),
        };

        fetch('http://localhost:4000/projects/notasmedia', requestInfo)
            .then(res => { return res.json() })
            .then(result => { return result })
            .then(notas => {
                console.log(notas)
                this.setState({
                    resultNota: notas.notas
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
                            <th scope="col">média</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                                this.state.resultNota.map((item) => {
                                    return (
                                        <tr key={item._id}>
                                            <td>{item.livro.titulo}</td>
                                            <td>{item.livro.autor}</td>
                                            <td>{item.nota}</td>
                                        </tr>
                                    );
                                })
                            } */}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ScreenAdmUserNotas;