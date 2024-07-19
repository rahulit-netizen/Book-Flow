// import { Badge } from "@material-ui/core";
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

import { SearchOutlined } from "@ant-design/icons";
import {ShoppingCartOutlined } from "@ant-design/icons"

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  position: sticky;
  top: 0;
  z-index:999;
  background-color:#f0f0ff;
  opacity:0.9;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color:white;
`;

const Input = styled.input`
  border: none;
  outline:none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  font-size:25px;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container >
      <Wrapper>
        <Left>

           <SearchContainer>
            <Input placeholder="Search" />
            <SearchOutlined  style={{ color: "gray", fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BOOK</Logo>
        </Center>
        <Right>
          <MenuItem>
          <Link  to="/register">
          REGISTER
          </Link></MenuItem>
          <MenuItem>
          <Link  to="/login">
          SIGN IN
          </Link></MenuItem>
          <MenuItem>
            <span badgeContent={4} color="primary">
           <ShoppingCartOutlined style={{ fontSize: '32px', color: '#000000'}} theme="filled"/>
            </span>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;