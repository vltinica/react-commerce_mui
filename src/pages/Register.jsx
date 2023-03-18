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
  width: 40%;
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
  flex-wrap: wrap;
  /* gap: 5px; */
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  font-size: 18px;
  padding: 5px;
  border: 2px solid #d32f2f;
  border-radius: 5px;
  color: #000;
  letter-spacing: 0.8px;
`;

const Agreement = styled.p`
  font-size: 12px;
  margin: 20px auto;
  color: #000;
  letter-spacing: 0.8px;
  text-align: center;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  text-align: center;
  margin-left: 30%;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.8px;
  background-color: #fe8b6f;
  color: #000;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            <br />
            data by the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
