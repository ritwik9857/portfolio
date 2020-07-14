import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './resumeparts/education'
import Training from './resumeparts/training';
import Skills from './resumeparts/skills';
class resume extends Component{
   render(){
       return(
        <div>
        <Grid>
            <Cell col={4}>
            <div style={{textAlign:'center'}}>
                <img src={require('./img2.jpeg')} 
                alt='avatar'
                style={{width:'250px',borderRadius:'50%'}}
                />
                <h2 style={{color:'white'}}>RITWIK</h2>
            </div>
            <div className='resume-left'>
                <h4 style={{color:'green'}}>Web Developer</h4>
                <hr style={{width:'80%', borderTop:'3px solid #ffee54'}}/>
                <p style={{width:'300px',fontSize:'18px'}}>A B.tech Computer science student with interest in web devlopment looking for appropriate opportunities to enchance his skills.</p>
                <hr style={{width:'80%', borderTop:'3px solid #ffee54'}}/>
                
                </div>

            </Cell>
            <Cell className='resume-right-col' col={8}>
                <h2>Education</h2>
                <Education 
                startYear={2016}
                endYear={2020}
                edu="(B.Tech-CSE)"
                schoolName="Dr.Akhilesh Das Gupta Institution of
                   Technology and Management"
                   percentage="75% (upto 7th sem)"
                />
                <Education 
                startYear={2015}
                endYear={2016}
                edu="(12th CBSE)"
                schoolName="Kendriya VIDYALAYA A.G.C.R COLONY
                DELHI-92"
                   percentage="71.3% "
                />
                <Education 
                startYear={2013}
                endYear={2014}
                edu="(10th CBSE)"
                schoolName="Kendriya VIDYALAYA A.G.C.R COLONY
                DELHI-92"
                   percentage="79.8% "
                />

                 <hr style={{ borderTop:'3px solid rgb(42, 46, 85)'}}/>
                     <h2 style={{paddingTop:'40px'}}>Training</h2>
                <Training 
                startYear="09/2019"
                endYear="12/2019"
                trainingName="NETWORKING"
                trainingdiscp="Learning the basics of Cisco networking and
                Routing Switching technologies along with
                IP addressing schemes.
                "
                />
                 <Training 
                startYear="07/2018"
                endYear="08/2018"
                trainingName="JAVA TUTORIAL"
                trainingdiscp="Completed Four-week Online Training From
                Sololearn"
                />

                 <hr style={{ borderTop:'3px solid rgb(42, 46, 85)'}}/>
                <h2>Skills</h2>

                
                <Skills 
                skill="HTML" 
                progress={100}
                />
                <Skills 
                skill="CSS"
                progress={100}
                />
                <Skills 
                skill="JS"
                progress={70}
                />
                <Skills 
                skill="REACT"
                progress={60}
                />
                <Skills 
                skill="jQuery"
                progress={50}
                />
                <Skills 
                skill="REDUX"
                progress={50}
                />
                 
                
                
            </Cell>
        </Grid>
    </div>
        );
    }
}
export default resume;