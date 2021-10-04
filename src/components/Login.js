import React from "react";
import "./Login.css";
import {Button} from "@material-ui/core"

function Login() {

const signIn = () =>{

}

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000marcas.net%2Fwp-content%2Fuploads%2F2019%2F11%2FLogo-Whatsapp.png&f=1&nofb=1"
          alt=""
          
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
