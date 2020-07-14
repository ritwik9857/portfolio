import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class training extends Component{
    render(){
        return(
            <div>
               <Grid>
                   <Cell col={4}>
                    <h5>{this.props.startYear} - {this.props.endYear}</h5>
                   </Cell>
                   <Cell col={8}>
                   
                       <h4 style={{marginTop:'0px'}}>{this.props.trainingName}</h4>
                       <h5>{this.props.trainingdiscp}</h5>
                   </Cell>
               </Grid>
           </div>
        );
    }
}
export default training;