import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPassword from './pages/ForgotPassword';

function App() {

  // require authentication
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    console.log(`isAuth: ${isAuth}`)
  }, [isAuth])

  return (
    <div className="wrapper">
      {(isAuth) && <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>}
      <Switch>
        <ProtectedRoute exact path='/' component={Home} isAuth={isAuth}/>
        <Route path='/signin'><SignIn isAuth={isAuth} setIsAuth={setIsAuth}/></Route>
        <Route path='/register'><Register isAuth={isAuth} setIsAuth={setIsAuth}/></Route>
        <Route path='/forgotpassword' component={ForgotPassword}/>
      </Switch>
    </div>
  );
}

export default App;
