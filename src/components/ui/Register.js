
import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'
import Header from '../Header';
import { Link } from 'react-router-dom';
/**
|--------------------------------------------------
| Tela de Login do Site
|--------------------------------------------------
*/
export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            message: ''
        };

    }


    create = () => {
        const data = {
            nome: this.nome,
            email: this.email,
            senha: this.senha,
            administrador: this.administrador == 'on' ? true : false,
        };
        console.log(data);
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };

        fetch('http://localhost:4000/auth/register', requestInfo)
            .then(response => {
                if (response.ok) {
                    console.log(response.data)
                    return response.json()
                }
                throw new Error("Login invalido");
            })
            .then(token => {
                localStorage.setItem('token', token);
                this.props.history.push("/");
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
                        <Label for="nome">nome</Label>
                        <Input type="text" id="nome" onChange={e => this.nome = e.target.value} placeholder="Informe seu nome"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" id="email" onChange={e => this.email = e.target.value} placeholder="Informe seu e-mail"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="senha">Senha</Label>
                        <Input type="password" id="senha" onChange={e => this.senha = e.target.value} placeholder="Informe sua senha"></Input>
                    </FormGroup>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" onChange={e => this.administrador = e.target.value} />
                        <label class="custom-control-label" for="customCheck1">Administrador</label>
                    </div>
                    <Button color="primary" block onClick={this.create}>Salvar</Button>
                </Form>
                <Link className="text-danger">Eu não tenho usuário</Link>
            </div>
        );
    }
}