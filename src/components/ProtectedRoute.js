import React from 'react';
import { Redirect, Route } from 'react-router';

export default function ProtectedRoute({ isAuth, component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={props => {
                return (isAuth)
                   ? <Component/>
                   : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
            }} 
        />)
}
