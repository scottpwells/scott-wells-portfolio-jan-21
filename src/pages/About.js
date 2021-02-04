import React, { Component } from 'react';
import projects from "../projects.json";
import scottwells180 from "../assets/scottwells180_180_jpg";  





class About extends Component {
    state = {
        projects
    }

    render() {
        return (
        
                <div className="Container">
                <div className="row">
                <div className="col-sm-12">
                <div className="card" id="featured-section">
                <div className="card-title"><h4>About Me</h4>
                
                <hr/>
                  <img src={"../assets/scottwells180_180_jpg"} alt={"thumbnail"}/>
                  <p> My name is Scott Wells I grew up in Bowling Green, Kentucky. After highschool I joined the United States Army and I served as an enlisted cannoneer at Fort Hood, Texas.
                     Upon completion of my service I was honorably discharged from the military and I went back home to Bowling Green, Kentucky to attend Western Kentucky University.
                     Where I majored in marketing and I graduated with a bachelors of science in marketing. Before graduating I accepted an entry level sales position with Dell, Inc.
                     So, I moved to Nashville and I began my career in technology sales at Dell. 
                     Over the last 15 years I have held various inside sales and outside sales and technical presales positions
                     that are highlighted on my <a href={"https://www.linkedin.com/in/scott-wells-8262303/"}>Linked-in</a> page, but recently due to many economic factors my position was eliminated. 
                     However, when one door closes. Sometimes another door opens 
                     and in this case it gave me the opportunity to attend Georgia Tech coding bootcamp to learn coding by coding.
                     </p>

                     <p>
                     I did this to become a better solutions architect, aspiring full time developer, and e-commerce entrepreneur and I can honestly say after a couple months in to the course. 
                     I have learned so much. I now not only know public cloud, hybrid cloud, and data center solutions, but I am now also beginning to have a deep understanding of software and devops.
                     So, If you have a opening for a technical well rounded solutions architect. Please contact me 
                     to discuss your position. You can either click on contact at the top right hand corner of the page for a contact form that will email me directly or please give me a call:
                     404-725-8454 or just click on the email link: <a href={"mailto:scottpwells@gmail.com"}>scottpwells@gmail.com</a> or you can also message me on <a href={"https://www.linkedin.com/in/scott-wells-8262303/"}>Linked-in</a>
                     However you reach out. I hope you do. I look forward to talking with you in the near future. Please download a copy of my resume below.
                     </p>


                      <a href={"https://www.dropbox.com/s/ebx8n3pfftwo9bz/Scott-Wells-Top-Solutions-Architect-Jan-2021.docx?dl=0"}>Resume Download</a>
              
            
              </div>
           </div>
         </div>
         </div>
         </div>
        )
    }
}

export default About;