import React, { Component } from 'react';
import FormMain from './FormMain';
import Result from './Result ';
import HeadCarousel from './HeadCarousel';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from "react";
import axios from "axios";

function MainPage() {
    const {
        isAuthenticated,
        user
    } = useAuth0();
    const [state, setState] = React.useState({ search: null , data : null, flag : false ,imgArr:[]});
    return (
        <div>
            <HeadCarousel />
            <FormMain searchValue={state.search} getFalg={state.flag}  searchbtn={search} />
            <Result searchValue={state.search} getFalg={state.flag} data={state.data}/>
        </div>
    );
    function search(str) {
        setState({
            ...state,
            search: str,
           flag : true
        })
        //alert(state.data);
        console.log((isAuthenticated)?user.email : ' NO');
        if(isAuthenticated)
        Auth(str);
        else
        notAuth(str);

    }

   async function Auth(src) {
        
        const options = {
            url: `https://raiveny.herokuapp.com/data?userEmail=${user.email}&query=${src}`,
            method: 'GET',
          };
          
         await axios(options)
         .then(response => {
            if(response.data.Data){
                console.log(response.data.Data)
                    setState({
                    ...state,
                    flag : false,
                    data : response.data.Data,
            })
            }
          if(response.data.message){
            setState({
            ...state,
               flag : false,
               data : null,
            })
            alert(`there no item with this Item `)
        }
        }).catch(err =>{
                setState({
                    ...state,
                       flag : false,
                       data : null    
                    })
                alert(`there is an Error With the Server `)
            });

    }

    

    

    // search when the customer did not login 
    async function notAuth(src) {
        const options = {
            url: `https://raiveny.herokuapp.com/data?query=${src}`,
            method: 'GET',
          };
          
         await axios(options)
            .then(response => {
                if(response.data.medication){
                setState({
                ...state,
                   flag : false,
                   data : response.data,

                })
            }
              if(response.data.message){
                setState({
                ...state,
                   flag : false,
                   data : null,
                })
                alert(`there no item with this Item `)
            }
            }).catch(err =>{
                setState({
                    ...state,
                       flag : false,
                       data : null    
                    })
                alert(`there is an Error With the Server `)
            });

    }


}


export default MainPage;