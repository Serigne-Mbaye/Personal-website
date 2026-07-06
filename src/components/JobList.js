import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Avanade": {
      jobTitle: "Sr Associate in IAM and Data Protection @",
      duration: "OCT 2025 - PRESENT",
      desc: [
    "Led the design and deployment of Microsoft Purview DLP solutions.",
    "Acted as a trusted advisor for data governance and compliance requirements.",
    "Managed end-to-end Data Protection programs, from architecture to production rollout.",
    "Implemented advanced Purview features like Endpoint DLP, IRM, and EDM.",
    "Enforced security controls to prevent data exfiltration and unauthorized sharing."]
    },
    "Avanade": {
      jobTitle: "Cyber Defense analyst Cloud & Application Security @",
      duration: "MAR 2025 - SEP 2025",
      desc: [
    "Engineered Zero Trust security architectures using Azure AD and Microsoft Defender XDR.",
    "Configured Conditional Access policies and MFA to enforce least-privilege access.",
    "Administered Microsoft Intune for comprehensive endpoint management and compliance.",
    "Conducted threat detection and incident response via Microsoft Defender for Identity.",
    "Deployed data protection strategies to ensure compliance with regulatory standards."
  ]
    },
    "Avanade": {
      jobTitle: "Intern - Junior Cyber Security Analyst @",
      duration: "NOV 2024 - MAR 2025",
      desc: [
    "Supported SOC operations and alert triage using Microsoft Defender XDR.",
    "Built and tuned SIEM use cases and KQL analytics in Microsoft Sentinel.",
    "Implemented SOAR playbooks for automated incident response.",
    "Configured Intune MDM/MAM baselines and assisted in Entra ID IAM hardening.",
    "Wrote PowerShell automations and mapped security controls to industry frameworks."
  ]
    },
    "University of Milan": {
      jobTitle: "Cybersecurity Student @",
      duration: "SEP 2021 - OCT 2025",
      desc: [
        "The degree program in Computer Systems and Network Security aims to provide graduates with a solid technological and methodological preparation in computer science, with particular attention to security and privacy.",
        "Furthermore, it offers basic and methodological knowledge in the fields of mathematical, physical and related sciences, preparing graduates to understand and evaluate scientific and technological progress in the field."
      ]
    },
    Centax: {
      jobTitle: "Customer service for Sorgenia Green Solution @",
      duration: "MAY 2024 - OCT 2024",
      desc: [
        "Management of customer requests related to inverters and photovoltaic panels.",
        "Diagnosis and resolution of technical malfunctions.",
        "Timely communication with customers via phone and email.",
        "Coordination with the technical team for service visits.",
        "Tracking of support tickets and documentation of activities."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
