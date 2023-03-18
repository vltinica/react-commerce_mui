// import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #ffccd5;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  font-weight: 600;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
