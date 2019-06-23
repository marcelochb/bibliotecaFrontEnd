import React from 'react';
/**
|--------------------------------------------------
| Formulário padrao que recebe por parametro
| informações dos campos, Parametros:
| _formItens => é um array que contém as variaveis:
|               {
|                 label => é o texto da tag <label>
|                 tipo => é o type da tag <input>
|                 placeholder => é o placeholder da tag <input>
|               }
| _botaoTexo => é o texto da tag <button>
|--------------------------------------------------
*/
const Form = (props) => {
    return (
        <div>
            <form>
                <div class="form-row align-items-center">
                    {props._formItens.map((item) => {
                        return (
                            <div class="col-auto">
                                <label class="sr-only" for="inlineFormInput">{item.label}</label>
                                <input type={item.tipo} class="form-control mb-2" id="inlineFormInput" placeholder={item.placeholder} />
                            </div>
                        );
                    }
                    )}
                    {console.log(props)}
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-2">{props._botaoTexto}</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;