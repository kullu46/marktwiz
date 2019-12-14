import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserRoles from "./user-roles";


const  PrivateRoute =  ({ component: Component, roles,status,isLoggedIn,...rest }) => {
    const currentUser =JSON.parse(localStorage.getItem("user"));
    
    let loggedInUserroleURL = "";
    if(currentUser)
        loggedInUserroleURL = UserRoles.types[currentUser.role].url;
    else
        loggedInUserroleURL ="/";

   return( <Route {...rest} render={({props }) => {
        if(currentUser){
            
            if(roles && roles.indexOf(currentUser.role) === -1){
                return (<Redirect to={{ pathname: loggedInUserroleURL }} />)
            }else{
                return (<Component {...props} />)
            }
        }else{
            return (<Redirect to={{ pathname: "/login" }} />)
        }
    }} />)
}
export default  PrivateRoute
