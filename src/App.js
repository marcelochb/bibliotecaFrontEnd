import React from 'react';
import './App.css';
//import UserNavBar from './screens/User/NavBar';
import AdmUserNavBar from './screens/AdmUser/NavBar';
//import Login from './components/ui/Login';
import LivrosForm from './screens/Livros/Form';
import LivrosList from './screens/Livros/List';
import NotasForm from './screens/Notas/Form';
import NotasList from './screens/Notas/List';


function App() {
  return (
    <div className="container">
      <AdmUserNavBar />
      <LivrosForm />
      <LivrosList />
      <NotasForm />
      <NotasList />
    </div>

  );
}

export default App;
