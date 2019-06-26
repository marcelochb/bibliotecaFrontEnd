import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'
import Header from '../Header';
import { Link } from 'react-router-dom';
/**
|--------------------------------------------------
| Tela de Login do Site
|--------------------------------------------------
*/
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            message: '',
        };

    }


    signIn = () => {
        const data = { email: this.email, senha: this.senha };
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };

        fetch('http://localhost:4000/auth/authenticate', requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Login invalido");
            })
            .then(data => {
                console.log(data.token);
                localStorage.setItem('nome', data.user.nome);
                localStorage.setItem('administrador', data.user.administrador);
                localStorage.setItem('token', data.token);
                console.log(localStorage.getItem('token'));
                this.props.history.push("/home");
            })
            .catch(e => {
                this.setState({ message: e.message })
            });
    };

    render() {
        return (
            <div className="container col-md-4 mt-5">
                <Header title="Avaliação de Livros Login" />
                <hr className="my-3" />
                {
                    this.state.message !== '' ? (
                        <Alert color="danger">{this.state.message}</Alert>
                    ) : ''
                }
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" id="email" onChange={e => this.email = e.target.value} placeholder="Informe seu e-mail"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="senha">Senha</Label>
                        <Input type="password" id="senha" onChange={e => this.senha = e.target.value} placeholder="Informe sua senha"></Input>
                    </FormGroup>
                    <Button color="primary" block onClick={this.signIn}>Entrar</Button>
                </Form>
                <Link className="text-danger" to="/register">Eu não tenho usuário</Link>
            </div>
        );
    }
}