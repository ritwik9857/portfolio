import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class about extends Component{

    render(){
        return(
            <Grid className='about-grid'>
                <Cell col={12}>
            <h1 style={{fontSize:'100px',fontFamily:'Antom',fontWeight:'bold',color:'palevioletred'}}>About</h1>
            </Cell>
            
            <div style={{width:"80%"}} class="aboutmeinfo">
            <Cell  col={12}>
                <p>Hello!</p>
    <p>
                    My name is Ritwik I'm a 21 years old Front End Web Developer based in India. I describe myself as a developer who loves coding, open source, and the web platform. 
                </p><br />
                <p>                 Currently I'm working with REACT, REDUX and Jquery.
               
                              In my spare time I like to create and contribute to open source project. </p><br /><p> That helps me to learn a lots of new stuff, grow as a developer and support other open source projects. I love travelling and discovering new places.
                </p>
            
            </Cell>
            </div>
        </Grid>
        );
    }
}
export default about;