import React from 'react';

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