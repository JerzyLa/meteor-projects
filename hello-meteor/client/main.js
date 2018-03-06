import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";

import App from "./../imports/ui/App";

let cvdata = {
  title: "Jerzy Lasyk",
  description: "I am software developer with over 4 years of professional experience, passionate about blockchain development.",
  addressUrl: "https://www.linkedin.com/in/jerzylasyk",
  personalInfo: {name: "E-mail", info: "jerzylasyk@gmail.com"},
  projects: [{name: "SDARS", description: "Satellite radio application for automotive companies like Volvo, Volkswagen."}],
  skills: [{name: "English", level: 4}, {name: "C++", level: 5}]
};

Meteor.startup(() => {
  ReactDOM.render(<App cvdata={cvdata} />, document.getElementById("app"));
});
