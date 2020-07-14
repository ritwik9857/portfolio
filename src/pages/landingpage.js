import React, { Component } from 'react';
import { Link, Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAddressCard, faLaptop, faFile, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons'
import { Grid, Cell } from 'react-mdl';
class landingpage extends Component {
  onclick = () =>{
    return <Redirect to='/about' />
  }
    render(){
  return (
            
     <Grid className='app'>
        <div id="left"></div>
             <div id="right"></div>
             <div id="top"></div>
               <div id="bottom"></div>
       <Cell style={{margin:'auto'}} col={12} className="name">
         <h1 style={{color:'white',margin:'auto',fontFamily:'Oxygen',letterSpacing:'5px',fontWeight:"bold"}}>I'M <span style={{color:'aqua'}} className='ritwik'>RITWIK</span></h1>
         <h4 style={{color:'white', margin:'auto',fontStyle:'italic'}}>As a <span style={{color:'aqua'}}className='ritwik'>Web Developer</span></h4>
      </Cell>
      <Cell col={12} className='img-grid'>

      <img  id="image" src={require('./img2.jpeg')} alt='avatar' ></img>
     
          <div className="buttons">
      
      <Link to='/about' style={{width:'15em',height:'10em',color:'white'}} className='button1'><br /><br /><br /><i id='b1'><FontAwesomeIcon icon={faAddressCard} /></i><br /><br />ABOUT <span style={{color:'palevioletred'}} id='me'>ME</span></Link>
      <Link to='/resume' style={{width:'15em',height:'10em',color:'white'}}className="button2"><br /><br /><br /><i id='b2'><FontAwesomeIcon icon={faFile} /></i><br /><br />MY <span style={{color:'yellow'}}id='resume'>RESUME</span></Link>
      <Link to='/projects' style={{width:'15em',height:'10em',color:'white'}} className="button3"><br /><br /><br /><i id='b3'><FontAwesomeIcon icon={faLaptop} /></i><br /><br />PRO<span style={{color:'green'}} id='ills'>JECTS</span></Link>
      <Link to='/contactme' style={{width:'15em',height:'10em',color:'white'}} className="button4"><br /><br /><br /><i id='b4'><FontAwesomeIcon icon={faPhoneSquareAlt} /></i><br /><br />CONTACT <span style={{color:'cornflowerblue'}} id='projects'>ME</span></Link>
      </div>

     
      </Cell>
     
      </Grid>
  
  );
}
}

export default landingpage;

