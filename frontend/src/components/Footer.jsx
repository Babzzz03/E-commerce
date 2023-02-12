import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Component>
       <Column1>
       <h3>Get To Know Us</h3>
       <p>Career</p>
       <p>Blog</p>
       <p>About Matrix</p>
       <p>Investor Relations</p>
       <p>Matrix Devices</p>
       <p>Matrix Science</p>

       </Column1>
       <Column2><h3>Make Money with Us</h3>
  
       <p>Sell products on Matrix</p>
       <p>Sell on Matrix Business</p>
       <p>Sell apps on Matrix</p>
       <p>Become an Affiliate</p>
       <p>Advertise Your Products</p>
       <p>Self-Publish with Us</p>
       <p>Host an Matrix Hub</p>
       <p>See More Make Money with Us</p>
       </Column2>
       <Column3><h3>Matrix Payment Products</h3>
      
       <p> Matrix Business Card</p>
       <p>Shop with Points</p>
       <p>Reload Your Balance</p>
       <p>Matrix Currency Converter</p>
       </Column3>
       <Column4><h3>Let Us Help You</h3>
      
       <p> Matrix and COVID-19</p>
       <p>Your Account</p>
       <p>Your Orders</p>
       <p>Shipping Rates & Policies</p>
       <p>Returns & Replacements</p>
       <p>Manage Your Content and Devices</p>
       <p>Matrix Assistant</p>
       <p>Help</p>
       </Column4>
    </Component>
  )
}

export default Footer

const Component = styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 40px;
border-bottom: 1px solid #fff;
p{
    line-height: 0px;
    font-size: 12px;
}
p:hover {
  text-decoration  : underline;
  cursor: pointer;
}
`;

const Column1 = styled.div`
display: flex;
flex-direction: column;

`;
const Column2 = styled.div`
display: flex;
flex-direction: column;
`;
const Column3 = styled.div`
display: flex;
flex-direction: column;
`;
const Column4 = styled.div`
display: flex;
flex-direction: column;
`;