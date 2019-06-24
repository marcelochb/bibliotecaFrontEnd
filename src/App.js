import React from 'react';
import './App.css';
//import UserNavBar from './screens/User/NavBar';
import AdmUserNavBar from './screens/AdmUser/NavBar';
//import Login from './components/ui/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScreenUserNotas from './screens/User/Notas';
import ScreenAdmUserNotas from './screens/AdmUser/Notas';
import ScreenAdmUserLivros from './screens/AdmUser/Livros';
import ScreenAdmUserHome from './screens/AdmUser/Home';


function App() {
  return (
    <Router>
      <div className="container">
        <AdmUserNavBar />
        <Switch>
          <Route path="/" exact component={ScreenAdmUserHome} />
          <Route path="/AdmUserLivros" component={ScreenAdmUserLivros} />
          <Route path="/UserNotas" component={ScreenUserNotas} />
          <Route path="/AdmUserNotas" component={ScreenAdmUserNotas} />
        </Switch>
      </div>

    </Router>

  );
}

export default App;
