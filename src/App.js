import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route , Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute.js'



//components
import ChatForm from './components/chatForm.js'
import FormikLoginForm from './components/LoginForm.js'
import RegisterForm from './components/RegisterForm.js'
import  Messages  from './components/messages.js'
import Home from './components/Home.js'

function App() {
  return (
    <div className="App">
      <Switch>
     <PrivateRoute path="/chat" component={Messages} />
     <Route path="/login" component={FormikLoginForm} />
     <Route path="/register" component={RegisterForm} />
     <Route path="/" component={Home} />
      </Switch>
      
    </div>
  );
}

export default App;
