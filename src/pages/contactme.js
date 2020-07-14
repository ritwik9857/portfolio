import React, { Component } from 'react';
import { Grid, Cell,List,ListItem,ListItemContent } from 'react-mdl';
class contact extends Component{
    render(){
        return(
  
            <div className='contact-body'>
            <Grid className='contact-grid'>
                <Cell col={6}>
                <h1>RITWIK</h1>
                    <img src={require('./img2.jpeg')}
                    alt="avatar"
                    style={{height:'300px',borderRadius:'50%'}} />
                    
                </Cell>
                <Cell col={6}>
                    <h1>Contact Me</h1>
                    <hr />
                    <div className='contact-list'>
                    <List>
                       <ListItem>
                          <ListItemContent style={{fontFamily:'Antom',fontSize:'1.2em'}}>
                          <i class="fa fa-phone-square" aria-hidden='true'></i>
                              91-96XXXXXX28
                              </ListItemContent>
                       </ListItem>
                       <ListItem>
                          <ListItemContent style={{fontFamily:'Antom',fontSize:'1.2em'}}>
                          <i class="fa fa-envelope" aria-hidden='true'></i>
                              ritwikkumar9857@gmail.com
                              </ListItemContent>
                       </ListItem>
                       <ListItem>
                          <ListItemContent style={{fontFamily:'Antom',fontSize:'1.2em'}}>
                          <a href='https://www.linkedin.com/in/ritwik-kumar-598a631b0/' target="_blank"  rel="noopener noreferrer"><i class="fa fa-linkedin" aria-hidden='true'>
                          </i>www.linkedin.com/in/ritwik-kumar</a>
                              </ListItemContent>
                       </ListItem>
                       <ListItem>
                          <ListItemContent style={{fontFamily:'Antom',fontSize:'1.2em'}}>
                          <a href='https://github.com/ritwik9857' target="_blank"  rel="noopener noreferrer"><i class="fa fa-github" aria-hidden='true'>
                          </i>https://github.com/ritwik9857</a>
                              </ListItemContent>
                       </ListItem>
                       
                       </List>
                    </div>
                    </Cell>
                
            </Grid>
        </div>
        );
    }
}
export default contact;