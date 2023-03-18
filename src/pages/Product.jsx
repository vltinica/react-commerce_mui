import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/Newsletter";
import Footer from "../components/Footer";
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  background-color: #fcf5f5;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 80%;
  height: 60vh;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding-top: 50px;
`;
const Title = styled.h1`
  letter-spacing: 0.8px;
  padding-bottom: 20px;
`;
const Desc = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  padding-bottom: 20px;
`;
const Price = styled.span`
  font-weight: 600;
  font-size: 22px;
  letter-spacing: 0.5px;
  color: #d32f2f;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.span`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-right: 15px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  border: 2px solid #d32f2f;
  border-radius: 5px;
  padding: 3px;
  cursor: pointer;
  /* &:hover {
    border: 3px solid red;
    border-radius: 5px;
    padding: 5px;
  } */
`;

const FilterSizeOption = styled.option`
  font-weight: 500;
  font-size: 16 px;
  line-height: 1.6;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
`;

const Amount = styled.span`
  padding: 0px 20px;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  /* color: #d32f2f; */
  border: 2px solid #d32f2f;
  padding: 8px;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            voluptatem consequuntur quisquam. Iusto sunt laborum tempora
            nesciunt culpa consequuntur fuga quo asperiores inventore numquam
            iure nobis temporibus odio excepturi cum, neque veniam quasi
            suscipit perferendis laboriosam doloremque doloribus, id voluptates.
          </Desc>
          <Price>Price: 25$</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="darkblue" />
              <FilterColor color="lightblue" />
              <FilterColor color="blue" />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <RemoveCircleOutlineOutlined color="error" />
              <Amount>1</Amount>
              <AddCircleOutlineOutlined color="error" />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
