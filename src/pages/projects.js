import React, { Component } from 'react';
import { Card,CardActions,CardText,CardTitle,CardMenu,Button } from 'react-mdl'
class projects extends Component{
    render(){
        return(
            <div className='projects-grid'>
            <Card shadow={0} style={{width: '300px', margin: 'auto',marginTop:'20px'}}>
            <CardTitle style={{color: '#fff', height: '170px', background: 'url(https://i.pinimg.com/originals/df/cf/99/dfcf993cf7447f5951bc266e25896fe4.jpg) center / cover'}}></CardTitle>
            <CardText style={{backgroundColor:'lightblue',color:'black'}}>
            Weather app Using React - Weather API
            </CardText>
            <CardActions border>
               <a href='https://ritwik9857.github.io/Weatherapp/' target='_blank' rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: 'black'}}>

            </CardMenu>
        </Card>
    
           <Card shadow={0} style={{width: '300px', margin: 'auto',marginTop:'20px'}}>
         <CardTitle style={{color: '#fff', height: '150px', background: 'url(https://andrewrgoss.com/img/projects/dom_pig_game.png) center / cover'}}></CardTitle>
         <CardText style={{backgroundColor:'brown',color:'white'}}>
         Pig-Dice game is a game based on two players rolling a dice.
        </CardText>
         <CardActions border>
         <a href='https://ritwik9857.github.io/Piggame/' target='_blank' rel="noopener noreferrer"> <Button colored>Live Demo</Button></a>
         </CardActions>
          <CardMenu style={{color: ''}}>
         </CardMenu>
           </Card>


           <Card shadow={0} style={{width: '300px', margin: 'auto',marginTop:'20px'}}>
         <CardTitle style={{color: '#fff', height: '150px', background: 'url(https://i.ytimg.com/vi/Yw-SYSG-028/maxresdefault.jpg) center / cover'}}></CardTitle>
         <CardText style={{backgroundColor:'grey',color:'white'}}>
         This project helps you improving your typing skills by playing a simple game
        </CardText>
         <CardActions border>
         <a href='https://ritwik9857.github.io/typinggame/' target='_blank' rel="noopener noreferrer"> <Button colored>Live Demo</Button></a>
         </CardActions>
          <CardMenu style={{color: 'black'}}>
         </CardMenu>
  </Card>


         <Card shadow={0} style={{width: '300px', margin: 'auto',marginTop:'20px'}}>
         <CardTitle style={{color: '#fff', height: '170px', background: 'url(https://pbs.twimg.com/profile_images/1188695076773326848/QdyrI2yY_400x400.png) center / cover'}}></CardTitle>
         <CardText style={{backgroundColor:'lightpink',color:'black'}}>
           Calculator
        </CardText>
         <CardActions border>
         <a href='https://ritwik9857.github.io/Calculator/' target='_blank' rel="noopener noreferrer"> <Button colored>Live Demo</Button></a>
         </CardActions>
          <CardMenu style={{color: 'black'}}>
         </CardMenu>
           </Card>

           <Card shadow={0} style={{width: '300px', margin: 'auto',marginTop:'20px'}}>
         <CardTitle style={{color: '#fff', height: '170px', background: 'url(https://miro.medium.com/max/300/1*kdY26OPGZbeNKJs60q0zUg.png) center / cover'}}></CardTitle>
         <CardText style={{backgroundColor:'lightpink',color:'black'}}>
          Tic Tac Toe game
        </CardText>
         <CardActions border>
         <a href='https://ritwik9857.github.io/TicGame/' target='_blank' rel="noopener noreferrer"> <Button colored>Live Demo</Button></a>
         </CardActions>
          <CardMenu style={{color: 'black'}}>
         </CardMenu>
           </Card>

           
            </div>
        );
    }
}
export default projects;