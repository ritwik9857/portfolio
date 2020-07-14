import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
class skills extends Component{

    render(){
        return(
            
                <Grid>
                    <Cell col={12}>
        <div style={{fontSize:"20px"}}>{this.props.skill}<ProgressBar style={{margin:'auto',marginTop:'-15px',width:'70%',height:'10px',}}
         progress={this.props.progress} />            
         </div>
                    </Cell>
                </Grid>
           
        );
    }
}
export default skills;