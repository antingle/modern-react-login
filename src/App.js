import React, { useState } from 'react';
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  // require authentication
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="wrapper">
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} isAuth={isAuth}/>
        <Route path='/login'><Login setIsAuth={setIsAuth}/></Route>
        <Route path='/register' component={Register} />
      </Switch>
    </div>
  );
}

export default App;
