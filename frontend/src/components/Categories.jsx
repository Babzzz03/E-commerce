import React from 'react'
import styled from 'styled-components'
import { useStateContext } from '../contexts/ContextProvider';
import Card from './Card'
import Footer from './Footer';

const Categories = () => {
   const { categories } = useStateContext();
  return (
    <Component>
      <CategoriesWrapper>
      <TextCategories>
        {" "}
        <h1>CATEGORIES</h1>{" "}
      </TextCategories>
      <Category>
        <CardWrapper>
          {console.log(categories)}
          {categories.map((mappedcategory)=> (
             <Card category={mappedcategory} key={mappedcategory.categories_id}/>
          ))}
         
        
        </CardWrapper>
      </Category>
      </CategoriesWrapper>
      <FooterContainer><Footer/>   <h1 className='Logo'>
            Ma<span style={{ color: "pink" }}>t</span>rix
          </h1></FooterContainer>
    </Component>
  );
}

export default Categories


const Component = styled.div`
display: flex;
min-height: 100vh;
background: #f3e4e4;
width: 100%;
flex-direction: column;

`; 

const CategoriesWrapper = styled.div`
display: flex;
min-height: 100vh;
background: #f3e4e4;
width: 100%;
`;


const TextCategories = styled.div`
  width: 17%;

  border-right: 2px solid pink;
  position: relative;
  h1 {
    position: absolute;
   opacity: 0.1;
    top: 17rem;
    left: -18%;
    font-size: 70px;
    transform: rotate(-90deg);
  }
`;
const Category = styled.div`
width: 83%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 10vh;

`;


const CardWrapper = styled.div`
  display: grid;
  
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

const FooterContainer = styled.div`
margin-top: 20px;
padding: 20px 80px;
display: flex;
flex-direction: column;
background-color: #393636;
color: white;
.Logo{
  font-family: "Lobster", cursive;
  font-size: 44px;
  cursor: pointer;
  a{
    text-decoration: none;
    color: black;
  }
}
`