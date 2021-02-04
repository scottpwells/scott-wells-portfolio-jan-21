import React, { Component } from 'react';
// import projects from "../projects.json";
import AboutImage from "../assets/images/aboutimage.jpg"
 

class About extends Component {
    render() {
        return (
            <>
                <div className="Container">
                <div className="row">
                <div className="col-sm-12">
                <div className="card" id="featured-section">
                <div className="card-title"><h4 style={{textAlign: "center",}}>About Me</h4>
            
                  <img src={AboutImage} className="image-a" alt="Scott Wells"/>
                  <p> My name is Scott Wells I grew up in Bowling Green, Kentucky. After highschool I joined the United States Army and I served as an enlisted cannoneer at Fort Hood, Texas.
                     Upon completion of my service I was honorably discharged from the military and I went back home to Bowling Green, Kentucky to attend Western Kentucky University.
                     Where I majored in marketing and I graduated with a bachelors of science in marketing. Before graduating I accepted an entry level sales position with Dell, Inc.
                     So, I moved to Nashville and I began my career in technology sales at Dell. 
                     Over the last 15 years I have held various inside sales and outside sales and technical presales positions
                     that are highlighted on my <a href={"https://www.linkedin.com/in/scott-wells-8262303/"}>Linked-in</a> page, but recently due to no fault of my own. My position was eliminated. 
                     However, when one door closes. Sometimes another door opens 
                     and in this case it gave me the opportunity to attend the Georgia Tech Coding Bootcamp.
                     </p>

                     <p>
                     I did this to become a better solutions architect, full Stack developer, and e-commerce entrepreneur and I can honestly say after graduating from the course. I definitely am.
                     When I look back at all the technology I had a opportunity to have hands on experience like HTML, JavaScript, JQUERY,CSS and Bootstrap, Handlebars, MYSQL, Sequelize, MongoDB,
                     Progressive Web Applications, and React. I realize how much my technical knowledge has grown beyond not only having a in-depth understanding of production public cloud, hybrid cloud, 
                     and on-premise data center solutions. I have now become a full stack software developer. 
                     
                     So, If you have a opening for a technical well rounded solutions architect, Technology consultant, or full stack developer.Please email me directly@<a href={"mailto:scottpwells@gmail.com"}>scottpwells@gmail.com</a>  or you can also message me on <a href={"https://www.linkedin.com/in/scott-wells-8262303/"}>Linked-in</a> and you can always give me a call at 404-725-8454. 
                     However, you reach out. I hope you do. I look forward to talking with you in the near future. Please download a copy of my resume below.
                     </p>


                      <a href={"https://www.dropbox.com/s/ebx8n3pfftwo9bz/Scott-Wells-Top-Solutions-Architect-Jan-2021.docx?dl=0"}>Resume Download</a>
              
            
              </div>
           </div>
         </div>
         </div>
         </div>
         </>
        )
    }
}

export default About;