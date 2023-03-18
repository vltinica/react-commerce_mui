import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;

  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;

  /* display: flex;
  flex-direction: column; */
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  font-size: 18px;
  padding: 5px;
  border: 2px solid #d32f2f;
  border-radius: 5px;
  color: #000;
  letter-spacing: 0.8px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 30%;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.8px;
  background-color: #fe8b6f;
  color: #000;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 5px 0;
  color: #000;
  font-size: 12px;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />

          <Button>LOGIN</Button>
          <Link>DON'T YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
