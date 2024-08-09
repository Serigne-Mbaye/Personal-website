import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <><p>
        I am currently a <b>cybersecurity</b> student at
        <a href="https://www.unimi.it/it"> University of Milan</a>, I acquired solid theoretical and practical skills in the IT field that allowed me to develop analytical and problem solving skills, as well as a strong aptitude for teamwork and time management.
      </p><p>
          I am a native speaker of <b>Italian</b> and <b>Wolof</b>, and I have a <b>B2 level</b> proficiency in <b>English</b>.
        </p></>
    );
    
    const two = (
      <p>
        Outside of studying i'm interested in developing a project involving younger generation into 
        discovering 
        african cinema, <a href="https://www.djieggo.com/">  Djieggo</a> was created to 
         incite inspiration in the youth in hopes that they are strongly rooted to the distinctive 
         reality that is Africa. Hence in equal measure at <a href="https://www.instagram.com/djieggo/">  Djieggo</a> also hold space for healing 
         through art and self-empowerment.
      </p>
    );

    const tech_stack = [
      "C",
      "Python",
      "Java",
      "Javascript",
      "PHP",
      "HTML",
      "CSS",
      "SQL",
      "GIT",

    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Serigne" src={"/assets/me.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
