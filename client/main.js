import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "/imports/ui/App";
import React from "react";

Meteor.startup(() => {
  render(<App />, document.getElementById("root"));
});
