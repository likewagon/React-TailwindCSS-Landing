import React, { Component } from "react";
import LoginPage from "pages/Login.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
class Login extends Component {
  render() {
    return (
      <AnimationRevealPage disabled>
        <LoginPage />
      </AnimationRevealPage>
    )
  }
}

export default Login