import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Toolbar from './components/toolbars/navigator';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/user/login';
import Register from './components/register/register';
import Dashboard from './components/dashboard/dashboard';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
          <Toolbar />
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
            </Switch>
            </div>
            </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
