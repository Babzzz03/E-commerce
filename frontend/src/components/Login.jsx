import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'
import image from "../assets/gradiant.jpg";
import KeyModel from './KeyModel';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <Component
      
    >
    <Left>  
      <KeyModel/>
      </Left>
      <Right>
       <Form>
        <h1>Sign In</h1>
        <p className="tag">E-mail</p>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="tag">Password</p>
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>
          <button >Sign In</button>
        </Button>
        <p className="create">
          Dont have an accout yet ?{" "}
          <Link className="Link" to="/signup">
            Create Account
          </Link>{" "}
        </p>
      </Form> 
      <Blur></Blur>
        <Blur2></Blur2>
        <Blur3></Blur3>
        <Blur4></Blur4>
      </Right>
      
    </Component>
  );
}

export default Login

const Component = styled.div`

background-color: rgba(255, 255, 255, 0.2);

  backdrop-filter: blur(10px);
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`;
const Left = styled.div`
height: 100vh;
width: 30vw;
background-color: #926b6b;

`;
const Right = styled.div`
height: 100vh;
width: 70vw;
display: flex;
align-items: center;
justify-content: center;
position: relative;
z-index: 999;
`;

const Form = styled.div`
  width: 30vw;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.2);
  margin-top: 40px;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  height: 80vh;
  border-radius: 10px;


  border-image: linear-gradient(#e8e6e1, #d7ba50) 10;
border-width: 1px;
border-style: solid;
border-radius: 10px !important;


  h1 {
    padding: 10px;
    padding-bottom: 17px;
  }
  input {
    width: 80%;

    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid black;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 0px;
    padding: 10px;
    outline: none;
    margin: 10px auto;
    font-size: 15px;
    background-color: transparent;
  }
  .tag {
    margin-top: 20px;
    margin-left: 14px;
  }
  button {
    margin-top: 20px;
    padding: 10px 4px;
    width: 14rem;
    outline: none;
    border-radius: 10px;
    background-color: #b180de;
    border: 1px solid black;
  }
  .create {
    margin: 30px auto;
  }

  .Link {
    text-decoration: none;
    color: #2d1941;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Blur = styled.div`
  position: absolute;
  width: 20rem;
  height: 14rem;
  border-radius: 50%;
  //background: #fdddfc;
  background: #f9b2f7;
  filter: blur(54px);
  top: 20px;
  right: 10%;
  z-index: -1;
`;
const Blur2 = styled.div`
  position: absolute;
  width: 20rem;
  height: 14rem;
  border-radius: 50%;
  //background: #f0ddfd;
  background: #ce95f4;

  filter: blur(54px);
  top: 150px;
  right: 17%;
  z-index: -3;
`;

const Blur3 = styled.div`
  position: absolute;
  width: 24rem;
  height: 14rem;
  border-radius: 50%;
  background: #efe9ac;

  filter: blur(44px);
  top: 140px;
  right: 4%;
  z-index: -2;
`;
const Blur4 = styled.div`
  position: absolute;
  width: 59rem;
  height: 10rem;
  border-radius: 50%;
  background: #fdd8de;

  filter: blur(94px);
bottom: 0;
  right: 0%;
  z-index: -1;
`;