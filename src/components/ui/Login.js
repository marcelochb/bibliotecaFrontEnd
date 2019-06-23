import React from 'react';
/**
|--------------------------------------------------
| Tela de Login do Site
|--------------------------------------------------
*/
const screensLogin = () => {
    return (
        <div className="container col-6 border mt-5">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Usuário</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usuario" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha" />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>

        </div>
    );
};

export default screensLogin;