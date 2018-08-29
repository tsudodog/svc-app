import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts/index";
import Exercises from "./Exercises/index";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    );
  }
}
