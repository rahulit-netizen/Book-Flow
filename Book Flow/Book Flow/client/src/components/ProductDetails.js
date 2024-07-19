import React from 'react'
import { useParams } from 'react-router-dom';
import books from '../Data/books-data';
import { Card  } from 'react-bootstrap';
import SendMessages from './SendMessage';
import BuyStore from './BuyStore';
const ProductDetails = () => {
    const { slug } = useParams();
    // const store=books[slug].store
    // let button
    // if(store==1){
          
    // }
  return (
    <div className="container">
       <h1>Products Details Page - {slug}</h1>

      <h1>{books[slug].name}</h1> 
      <div>
       <Card.Img  variant="top" src={books[slug].image} style={{ height: '130px', cursor: 'pointer' }} />
       </div>
       <div>
           {books[slug].description}
       </div>
       <div>
           <h1>Price</h1>
          small : {books[slug].prices[0].small} 
          medium : {books[slug].prices[0].medium}
          large : {books[slug].prices[0].large}
          
           </div>
      

          {books[slug].shop===0 ? (<BuyStore props={books[slug]} />) : (<div>
               <h1>Chat on whatsapp</h1>
               <SendMessages />
           </div>)} 

    </div>
  )
}

export default ProductDetails