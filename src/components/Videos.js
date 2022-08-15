 import React, { Component } from 'react';
 import ReactPlayer from "react-player"
  

 class Videos extends Component {
    render() {
        return (
       <div className='div-video'>

          <h3> Related Videos</h3>

            <div className='video'>
             <ReactPlayer className='item' width='250px'height='200px'controls url='https://www.youtube.com/watch?v=9iMGFqMmUFs' 
             />     
              <ReactPlayer  className='item' width='250px' height='200px' controls url='https://www.youtube.com/watch?v=aDsW8tx1KsY'
             /> 
                <ReactPlayer className='item' width='250px'height='200px'controls url='https://www.youtube.com/watch?v=uOcpsXMJcJk' 
             />     
               <ReactPlayer className='item' width='250px'height='200px'controls url='https://www.youtube.com/watch?v=8qK0hxuXOC8' 
             />          
            </div>
       </div>   
        
        );
    }
 }
 
 export default Videos;

   




 