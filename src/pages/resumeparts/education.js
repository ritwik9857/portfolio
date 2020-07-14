import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class education extends Component{
    render(){
        return(
           <div>
               <Grid>
                   <Cell col={4}>
                    <h5>{this.props.startYear} - {this.props.endYear}</h5>
                    <h5>{this.props.edu}</h5>
                   </Cell>
                   <Cell col={8}>
                   
                       <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
                       <h6>{this.props.percentage}</h6>
                   </Cell>
               </Grid>
           </div>
        );
    }
}
export default education;