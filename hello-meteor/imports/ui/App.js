import React from "react";

import Title from "./Title"

// TODO: personal info ...
// TODO: check auto run itp
// TODO: tide up css in scss
// TODO: integrate with truffle
export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 bg-blue text-white nopadding">
            <div className="info-padding">
              <Title title={this.props.cvdata.title}/>
              {/* <PersonalInfo/> */}
            </div>
          </div>
          <div className="col-md-8 bg-grey nopadding">
            <div className="info-padding">
              <h1>Second section</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
