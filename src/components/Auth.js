import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";


function Auth() {

    return (
        <>
            <LogoutButton />
            <LoginButton />
        </>
        // isAuthenticated ? <LogoutButton /> : <LoginButton />
    )
}
export default Auth;






