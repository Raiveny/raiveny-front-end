import React, { Component } from 'react';
import FormMain from './FormMain';
import Result from './Result ';
import HeadCarousel from './HeadCarousel';
import { useAuth0 } from '@auth0/auth0-react';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

function MainPage() {
    const {
        isAuthenticated,
        user
    } = useAuth0();
    const Success = () => toast.success('We Found Something for You');
    const Error = () => toast.error('We are Sorry, We did not Find anything');
    const ServerError = () => toast.error('there is an Error With Server');
   
    const [state, setState] = React.useState({ search: null , data : null, flag : false ,imgArr:[]});
    return (
        <div>
                      <Toaster 
                        position="top-left"
                        reverseOrder={false}
                        toastOptions={{

                            className: '',
                            duration: 5000,
                            style: {
                              background: '#6CB6C4',
                              color: '#fff',
                            },

                            success: {
                              duration: 5000,
                              theme: {
                                primary: '#6CB6C4',
                                secondary: 'black',
                              },
                            },
                          }}
                        
                        />
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
            if(response.data.medication){
              Success()
              setState({
                ...state,
                flag : false,
                data : response.data,
              })
            }
          if(response.data.message){
            Error()
              setState({
                  ...state,
                  flag : false,
                  data : null,
                })
            
        }
        }).catch(err =>{
          ServerError()
                setState({
                    ...state,
                       flag : false,
                       data : null    
                    })
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
                    Success()
                setState({
                ...state,
                   flag : false,
                   data : response.data,

                })
            }
              if(response.data.message){
                Error()
                setState({
                ...state,
                   flag : false,
                   data : null,
                })
               
            }
            }).catch(err =>{
                setState({
                    ...state,
                       flag : false,
                       data : null    
                    })
                    ServerError()
            });

    }


}


export default MainPage;