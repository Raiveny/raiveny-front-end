import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";


function Auth() {
    const { isAuthenticated } = useAuth0;


    return (
        <>
            <LogoutButton />
            <LoginButton />
        </>
        // isAuthenticated ? <LogoutButton /> : <LoginButton />
    )
}
export default Auth;






