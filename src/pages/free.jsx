import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class FreePage extends Component {
  render() {
    return (
      <div className="free-container">
        <Helmet title={`Free Stuff | ${config.siteTitle}`} />
        <h1>Free stuff page</h1>
      </div>
    );
  }
}

export default FreePage;