import React, { Component } from 'react';
import Home from '../../components/ui/Home';

class ScreenAdmUserHome extends Component {
    render() {
        return (
            <div>
                {console.log('entrou')}
                <Home _texto={'Site para cadastro de livros e verificação das notas.'} />
            </div>
        );
    }
}

export default ScreenAdmUserHome;