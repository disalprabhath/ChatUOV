import { useState } from "react";
import axios from "axios";




const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();


  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (

    <div className="login-page">
    <h1 align="center" id="backtologin"><span class="underlined underline-clip">Chat App</span></h1>

    <p align="center">Chat & Share your files safe</p>

      <div class="form">

              <ul class="tab-group">
                <li class="tab  active"><a href="#backtologin">Log In</a></li>
                <li class="tab"><a href="#signup">Sign Up</a></li>
              </ul>



     <div class="">
      <div id="login" class="field-wrap">
      <div class="tab-content">
        {/*login*/}
        <form onSubmit={onLogin} action="/" method="post">
          <div className="title">Login</div>

          <div class="field-wrap">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required autocomplete="on"
            onChange={(e) => setUsername(e.target.value)}
          />
          </div>

          <div class="field-wrap">
          <input
            type="password"
            name="secret"
            placeholder="Password"
            required autocomplete="on"
            onChange={(e) => setSecret(e.target.value)}
          />
          </div>
          <p class="forgot"><a href="#">Forgot Password?</a></p>
          <button type="submit" class="button button-block">Log In</button>
        </form>
        </div>
        <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        </div>
        {/*Signup*/}
        <div id="signup">
        <form onSubmit={onSignup}>
          <div className="title">Sign Up</div>
          <input
            class="field-wrap"
            type="text"
            name="username"
            placeholder="Username"
            required autocomplete="on"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            class="field-wrap"
            type="password"
            name="secret"
            placeholder="Password"
            required autocomplete="on"
            onChange={(e) => setSecret(e.target.value)}
          />
          <input
            class="field-wrap"
            type="text"
            name="email"
            placeholder="Email"
            required autocomplete="on"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div class="top-row">
          <input
            class="field-wrap"
            type="text"
            name="first_name"
            placeholder="First name"
            required autocomplete="on"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            class="field-wrap"
            type="text"
            name="last_name"
            placeholder="Last name"
            required autocomplete="on"
            onChange={(e) => setLastName(e.target.value)}
          />
          </div>
          <p class="forgot"><a href="#backtologin">Already you have an account?</a></p>
          <button type="submit" class="button button-block">Get Started</button>

        </form>
        </div>
      </div>
 </div>
 <link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600' rel='stylesheet' type='text/css'/>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />

      <style>
          {`

          .login-page { width: 100vw; height: 220vh; padding-top: 6vw; background: linear-gradient(180deg, rgba(117,84,160,1) 7%, rgba(117,84,160,1) 17%, rgba(106,95,168,1) 29%, rgba(99,103,174,1) 44%, rgba(87,116,184,1) 66%, rgba(70,135,198,1) 83%, rgba(44,163,219,1) 96%, rgba(22,188,237,1) 100%, rgba(0,212,255,1) 100%); }
          .title { padding-top: 20px; font-size: 22px; color: white; font-weight: 700; }
          input { width: calc(100% - 16px); margin-top: 12px; padding: 8px; background-color: #e6f7ff; outline: none; border: 1px solid #e6f7ff; }

          *, *:before, *:after {
            box-sizing: border-box;
          }

          html {
            overflow-y: scroll;
          }

          body {
            background: #c1bdba;
            font-family: 'Titillium Web', sans-serif;
          }

          a {
            text-decoration: none;
            color: #1ab188;
            transition: .5s ease;
          }
          a:hover {
            color: #179b77;
          }

          .form {
            background: rgba(19, 35, 47, 0.9);
            padding: 40px;
            max-width: 600px;
            margin: 40px auto;
            border-radius: 4px;
            box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
          }

          .tab-group {
            list-style: none;
            padding: 0;
            margin: 0 0 40px 0;
          }
          .tab-group:after {
            content: "";
            display: table;
            clear: both;
          }
          .tab-group li a {
            display: block;
            text-decoration: none;
            padding: 15px;
            background: rgba(160, 179, 176, 0.25);
            color: #a0b3b0;
            font-size: 20px;
            float: left;
            width: 50%;
            text-align: center;
            cursor: pointer;
            transition: .5s ease;
          }
          .tab-group li a:hover {
            background: #179b77;
            color: #ffffff;
          }
          .tab-group .active a {
            background: #1ab188;
            color: #ffffff;
          }

          .tab-content > div:last-child {
            display: none;
          }
          //title
          h1 {
            font-size: clamp(3rem, 15vmin, 8rem);
            font-family: sans-serif;
            color: hsl(0 0% 98%);
          }
          .underlined {
            position: relative;
          }
          .underline-clip:after {
            content: '';
            position: absolute;
            top: 95%;
            width: 150%;
            aspect-ratio: 3 / 1;
            left: 50%;
            transform: translate(-50%, 0);
            border-radius: 50%;
            border: 6px solid hsl(130 80% 50%);
            /* Use a clip-path to hide and show the bits you want */
            clip-path: polygon(0 0, 50% 50%, 100% 0);
          }

          label {
            position: absolute;
            transform: translateY(6px);
            left: 13px;
            color: rgba(255, 255, 255, 0.5);
            transition: all 0.25s ease;
            -webkit-backface-visibility: hidden;
            pointer-events: none;
            font-size: 22px;
          }
          label .req {
            margin: 2px;
            color: #1ab188;
          }

          label.active {
            transform: translateY(50px);
            left: 2px;
            font-size: 14px;
          }
          label.active .req {
            opacity: 0;
          }

          label.highlight {
            color: #ffffff;
          }

          input, textarea {
            font-size: 22px;
            display: block;
            width: 100%;
            height: 100%;
            padding: 5px 10px;
            background: none;
            background-image: none;
            border: 1px solid #a0b3b0;
            color: #ffffff;
            border-radius: 0;
            transition: border-color .25s ease, box-shadow .25s ease;
          }
          input:focus, textarea:focus {
            outline: 0;
            border-color: #1ab188;
          }

          textarea {
            border: 2px solid #a0b3b0;
            resize: vertical;
          }

          .field-wrap {
            position: relative;
            margin-bottom: 40px;
          }

          .top-row:after {
            content: "";
            display: table;
            clear: both;
          }
          .top-row > div {
            float: left;
            width: 48%;
            margin-right: 4%;
          }
          .top-row > div:last-child {
            margin: 0;
          }

          .button {
            border: 0;
            outline: none;
            border-radius: 0;
            padding: 15px 0;
            font-size: 2rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: .1em;
            background: #1ab188;
            color: #ffffff;
            transition: all 0.5s ease;
            -webkit-appearance: none;
          }
          .button:hover, .button:focus {
            background: #179b77;
          }

          .button-block {
            display: block;
            width: 100%;
          }

          .forgot {
            margin-top: -20px;
            text-align: right;
          }

`}
      </style>

      </div>
    </div>
  );
};

export default AuthPage;


