import React from 'react';
/**
 * Lista de dados padrao com a passagem de parametro do campos
 * Parametros: _listCampos => Array com os textos dos campos
 */
const List = (props) => {
    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        {
                            props._listCampos.map((item) => {
                                return (
                                    <th scope="col">{item}</th>

                                );
                            }
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    );
};

export default List;