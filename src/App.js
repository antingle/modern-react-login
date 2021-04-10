import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  // require authentication
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    console.log(`isAuth: ${isAuth}`)
  }, [isAuth])

  return (
    <div className="wrapper">
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} isAuth={isAuth}/>
        <Route path='/login'><Login isAuth={isAuth} setIsAuth={setIsAuth}/></Route>
        <Route path='/register'><Register isAuth={isAuth} setIsAuth={setIsAuth}/></Route>
      </Switch>
    </div>
  );
}

export default App;
