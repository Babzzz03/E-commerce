import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { BiMenuAltRight, BiSearchAlt } from "react-icons/bi";
import { MdOutlineShoppingCart, MdHistory } from "react-icons/md";
import {AiOutlineUser} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useStateContext } from '../contexts/ContextProvider';
const Header = () => {
  const { sidebarOpened, setSidebarOpened, cartItem, setCartItem } = useStateContext()
 const navigate = useNavigate()

 useEffect(() => {
   let cart = JSON.parse(localStorage.getItem("cartitems"));

   setCartItem(cart);
 }, []);
   const [showSearch, setShowSearch] = useState(false);
   const [inputHover, setInputHover] = useState(false);
   console.log(showSearch)
      console.log(inputHover);
  return (
    <Components>
      <Logo>
        <Link to="/">
          <h1>
            Ma<span style={{ color: "pink" }}>t</span>rix
          </h1>
        </Link>
      </Logo>
      <RightSidebar>
        <SearchBar>
          <form
            style={{
              marginRight: `${showSearch ? "40px" : "0px"}`,
              background: `${showSearch ? "#ffffff" : "transparent"}`,
              border: `${showSearch ? "1px solid #daa3d2" : "none"}`,
            }}
          >
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
              style={{ padding: `${showSearch ? "2px" : "0px"}` }}
            >
              <BiSearchAlt
                style={{
                  marginRight: `${showSearch ? "0px" : "40px"}`,
                  fontSize: "24px",
                }}
              />
            </button>

            <input
              type="text"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
              style={{
                width: `${showSearch ? "30vw" : "0vw"}`,
                display: `${showSearch ? "flex" : "none"}`,
              }}
            />
          </form>
        </SearchBar>
        <HeaderIconContainer>
           <MdHistory
          style={{ marginRight: 40 }}
          onClick={() => navigate("/orders")}
        />
        <Info>
            History
          </Info>
        </HeaderIconContainer>
       
        <HeaderIconContainer>
         <AiOutlineUser
          style={{ marginRight: 40 }}
          onClick={() => navigate("/login")}
        />  
         <Info>
         <p> User</p>
           
          </Info>
          <Number>
              <p>?</p>
            </Number>
        </HeaderIconContainer>
       
        <Cart>
          <MdOutlineShoppingCart
            style={{ marginRight: 40 }}
            onClick={() => navigate("/cart")}
          />
          <Info>
           
            Cart
          </Info>
          {cartItem.length > 0 && (
            <CartNumber>
              <p>{cartItem.length}</p>
            </CartNumber>
          )}
        </Cart>

        <BiMenuAltRight onClick={() => setSidebarOpened(!sidebarOpened)} />
      </RightSidebar>
    </Components>
  );
}

export default Header


const Components = styled.div`
  background-color: transparent;
  margin: 0px 40px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Logo = styled.div`
  font-family: "Lobster", cursive;
  font-size: 24px;
  cursor: pointer;
  a{
    text-decoration: none;
    color: black;
  }

`;
const RightSidebar = styled.div`
  display: flex;
  color: black;
cursor: pointer;
  > * {

    font-size: 24px;
  }

`;

const GlowAnimation = keyframes `
0% {
 opacity: 0

}
100% {
  opacity: 1;
  background: #e63094;
  color: white;
  
}
`;

const Number = styled.div`
  width: 17px;
  height: 17px;
  position: absolute;
  top: -7px;
  right: 27px;
  border-radius: 50%;
  background: #f1bbd9;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ${GlowAnimation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
p {
 
  font-size: 15px;

}
`;
const CartNumber  = styled.div`
  width: 17px;
  height: 17px;
  position: absolute;
  top: -7px;
  right: 27px;
  border-radius: 50%;
  background: #f1bbd9;
  display: flex;
  align-items: center;
  justify-content: center;

p {
 
  font-size: 15px;

}
`;

const SearchBar = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;
    border-radius: 4px;

    button {
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  }
  input {
    height: 17px;
    outline: none;
    border: none;
  }
`;

const Info = styled.div`
position: absolute;
display: none;
top: 27px;
font-size: 13px;
font-size: bold;
left: -18px;
background-color: #ef629b;
border-radius: 4px;
width: 100%;
height: 100%;
`;

const HeaderIconContainer = styled.div`
position: relative;
&:hover ${Info} {
  display: flex;
align-items: center;
justify-content: center;
}
`;

const Cart = styled.div`

position: relative;
&:hover ${Info} {
  display: flex;
align-items: center;
justify-content: center;
}
`;