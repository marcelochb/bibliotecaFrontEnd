import React from 'react';
import ComponetUserNotasForm from '../../components/User/Notas/Form';
import ComponetUserNotasList from '../../components/User/Notas/List';

const ScreenUserNotas = () => {
    return (
        <div>
            <ComponetUserNotasForm />
            <ComponetUserNotasList />
        </div>
    );
};

export default ScreenUserNotas;