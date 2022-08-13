import React, { Component } from 'react';
import FormMain from './FormMain';
import Result from './Result ';
import HeadCarousel from './HeadCarousel';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from "react";
const axios = require('axios');

function MainPage() {

    const {
        isAuthenticated

    } = useAuth0();
    const [state, setState] = React.useState({ search: null , data : null});


    return (
        <div>
            <HeadCarousel />
            <FormMain searchbtn={search} />
            <Result searchValue={state.search} />
        </div>
    );


    function search(str) {
        setState({
            ...state,
            search: str,
            data : [1,2,3]
        })
        //alert(state.data);
        console.log((isAuthenticated)?'YEs' : ' NO');
        if(isAuthenticated)
        Auth();
        else
        notAuth();

    }

    function Auth(params) {
        alert('Yes');
    }

    // search when the customer did not login 
    async function notAuth(params) {

        // const options = {
        //     url: 'https://raiveny.herokuapp.com/data?query=headache',
        //     method: 'GET',
        //   };
          
        //   axios(options)
        //     .then(response => {
        //       console.log(response.status);
        //     });

    }


}


export default MainPage;