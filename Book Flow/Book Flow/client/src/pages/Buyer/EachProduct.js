import React from 'react'
import styled from "styled-components";
import Navbar from '../../components/Navbar';
import Announcement from '../../components/Buyer/Announcement';
import Footer from '../../components/Buyer/Footer';
import { mobile } from '../../responsive';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import axios from 'axios';







const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 75vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
  padding:15px;
  
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;





const EachProduct = () => {


  const [data,setData] =useState({});

  const params = useParams();



  
 useEffect(() => {
  const configuration = {
  method: "get",
  url: `http://localhost:5000/sell/products/${params.id}`,
//   headers: { // Authorization: `Bearer ${token}`, //   },
   };

axios(configuration)
.then((result) => {
setData(result.data.products);

})
.catch((error) => {
error = new Error();
});
},[])


console.log(data);
   
  return (
    <>
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={data.imgurl}/>
        </ImgContainer>
        <InfoContainer>
        <div class=" max-w-auto w-full h-auto m-2.5 p-6 bg-white border border-gray-200 rounded-lg shadow  hover:shadow-xl inline-block">
   <h5 class="text-0.5xl font-semibold tracking-tight text-teal-900 ">
    {data.title}
   </h5>
    </div>
    <hr/>
          <div class=" max-w-auto w-full h-auto m-2.5 p-6 bg-white border border-gray-200 rounded-lg shadow  hover:shadow-xl inline-block">
   <h5 class="text-0.5xl font-semibold tracking-tight text-teal-900 ">
    {data.description}
{/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
   </h5>
    </div>
<hr/>
    <div class=" max-w-auto w-full h-auto m-2.5 p-6 bg-white border border-gray-200 rounded-lg shadow  hover:shadow-xl inline-block">
   <h5 class="text-0.5xl font-semibold tracking-tight text-teal-900 ">
    {data.sellerEmail}
 
   </h5>
   <br/>
  <h2 class="hover:bg-red-600 bg-teal-700  text-center text-3xl font-semibold  text-white" 
  >  CHAT WITH SELLER </h2>
    </div>
         
          {/* <FilterContainer> */}
            {/* <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter> */}
            {/* <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter> */}
          {/* </FilterContainer> */}
          {/* <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer> */}
        </InfoContainer>
      </Wrapper>
    </Container>
    <Footer/>
   </>
  )
}

export default EachProduct;










