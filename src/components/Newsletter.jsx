import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 2px solid lightgrey;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  color: black;
`;

const Button = styled.button`
  flex: 1;
  border: 2px solid #ff5376;
  border-radius: 10px;
  background: transparent;
  margin-left: 25px;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send
            color="error"
            sx={{
              display: "flex",
              paddingLeft: "40%",
              // justifyContent: "flex-end",
              alignItems: "center",
            }}
          />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
