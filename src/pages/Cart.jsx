import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`
  background-color: #fcf5f5;
`;

const Wrapper = styled.div`
  padding: 20px;
  /* background-color: #fcf5f5; */
`;

const Title = styled.h1`
  font-weight: 500;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? " #ffccd5" : "transparent"};
  color: ${(props) => props.type === "filled" && "black"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
`;

const Hr = styled.div`
  background-color: #ffccd5;
  border: none;
  height: 2px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 220px;
  height: 150px;
  object-fit: cover;
  /* transform: scale(0.5); */
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.div``;
const ProductID = styled.div``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.div``;

const ProductAmountCountainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductAmount = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  font-size: 26px;
  font-weight: 500;
  margin: 0px 15px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 500;
  padding: 20px;
`;

const Summary = styled.div`
  flex: 1;
  height: 40vh;
  border: 1px solid #ffccd5;
  border-radius: 5px;
  padding: 20px;
  margin-left: 40px;
  margin-top: 5%;
`;

const SummaryTitle = styled.h1`
  font-size: 26px;
  font-weight: 500;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  font-weight: 500;
  border-radius: 5px;
  background-color: #ffccd5;
  border: none;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://pagesix.com/wp-content/uploads/sites/3/2022/01/steve-madden.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductID>
                    <b>ID:</b> 69599791697734
                  </ProductID>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountCountainer>
                  <AddCircleOutlineOutlined color="error" />
                  <ProductAmount>1</ProductAmount>
                  <RemoveCircleOutlineOutlined color="error" />
                </ProductAmountCountainer>
                <ProductPrice>75 $</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            {/* --------------------------------------------------------------------------------- */}
            <Product>
              <ProductDetail>
                <Image src="https://pagesix.com/wp-content/uploads/sites/3/2022/01/new-blanace.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductID>
                    <b>ID:</b> 69597567892564
                  </ProductID>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountCountainer>
                  <AddCircleOutlineOutlined color="error" />
                  <ProductAmount>1</ProductAmount>
                  <RemoveCircleOutlineOutlined color="error" />
                </ProductAmountCountainer>
                <ProductPrice>75 $</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal: </SummaryItemText>
              <SummaryItemPrice>150 $</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping: </SummaryItemText>
              <SummaryItemPrice>9.50 $</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText>Total: </SummaryItemText>
              <SummaryItemPrice>169.50 $</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
