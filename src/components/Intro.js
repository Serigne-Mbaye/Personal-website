import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"Serigne"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I create stuff sometimes.</div>
          <div className="intro-desc">
          I'm a cybersecurity student in Milan.
          </div>
          <a
            href="mailto:serigne.mby@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Contact me"}
          </a>
          <a className="intro-contact" href="/assets/CV_SerigneMbayeENG.pdf" download="CV_SerigneMbayeENG.pdf">
          <PictureAsPdfIcon></PictureAsPdfIcon>
          {" C.V."}
          </a>

          

        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
