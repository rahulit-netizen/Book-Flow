import React from 'react' 
import { HeartOutlined } from '@ant-design/icons';
import Announcement from '../../components/Buyer/Announcement'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Buyer/Footer';
import Banner from '../../components/Buyer/Banner';
import MiddleBanner from '../../components/Buyer/MiddleBanner';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

const cookies =new Cookies();

const Home = () => {

    const [productForBuy,setProductForBuy] = useState([])

    const token = cookies.get("TOKEN");
    let user1;
    if(token)
    { user1=jwtDecode(token);}


    const getAllProducts1 = function()
    {
        if(token)
        {
        const configuration = {
            method: "post",
            url: "http://localhost:5000/sell/products/2",
          //   headers: { // Authorization: `Bearer ${token}`, //   },
          data:{
          sellerEmail:user1.userEmail
          }
          };
      
         axios(configuration)
        .then((result) => {
         setProductForBuy(result.data.products);
         })
        .catch((error) => {
          error = new Error();
        });
      }
    }

    useEffect(() => {
      // console.log(productForBuy);
     getAllProducts1();
  },[productForBuy]);



  return (
    <>
    <Navbar/>
    <Announcement/>
    <Banner/>
    
    
<div id="gallery" class=" my-12 max-h-screen

" data-carousel="slide">
    
    <div class="relative h-48 overflow-hidden rounded-lg md:h-80 my-10">
 
    <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
        </div>
   
    <div class="flex justify-center items-center pt-4">
        <button type="button" class="flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" class="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
</div>


   

    {/* <div class="min-h-screen"> */}
        {/* <input type="number" placeholder='Pincode' /> */}
    {/* {productForBuy.map((productDetails) => (
<div class="w-auto  max-w-xs bg-gray-50 hover:shadow-2xl inline-block m-2.5 mt-8">
     <a href={`/buy/products/${productDetails._id}`} >
        <img class="p-3 rounded-t-lg object-cover  h-48 w-96" src={productDetails.imgurl} alt="" />
        <span class="text-green-900 hover:text-yellow-500">{productDetails.title}</span>
        <br></br>
        <span>{productDetails.price}</span>
      
    </a> */}
    {/* <div class="px-5">
      
        <div class="py-2 flex justify-between">
        <a href={`/sell/products/${productDetails._id}`} class="text-white  font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-red-700">EDIT</a>
        <button  value={productDetails._id} class="text-white   font-medium rounded-xm text-sm  px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-red-700"
         onClick={handleDelete}
         
        > DELETE </button>
        </div>
    </div> */}
{/* </div>
))} */}

 {/* </div> */}
 <div class="bg-gray-100 min-h-screen px-24 py=0">
 {productForBuy.map((productDetails) => (
 <div class="w-64 max-w-xs  h-auto relative shadow-md bg-white inline-block mx-4 my-10">
    <a href={`/buy/products/${productDetails._id}`} >
		<div  class="absolute left-0 top-5 text-uppercase text-xs font-bold bg-red-500 text-white py-1 px-3">
    Hot</div>

		<div class="flex items-center justify-center h-56 px-5">
			<img class=" h-48 w-80 object-cover " src={productDetails.imgurl} alt=""/>
		</div>
		<div class="px-5 ">
			<span class="block text-sm font-bold text-uppercase text-gray-300 mb-2">Women,bag</span>
			<h4 ><a  class="font-medium block mb-2 text-uppercase text-gray-700 no-underline transition duration-300 hover:text-yellow-400" href="">Women leather bag</a></h4>
			<p class="text-base leading-6 mb2 text-gray-500">Lorem ipsum !</p>
			<div class="overflow-hidden border-t border-gray-300 mt-3">
				<div class=" text-xs text-yellow-400 font-bold float-left w-1/2"><small class="text-sm font-normal line-through inline-block mr-1.5 mt-2"
        >$96.00</small>$230.99</div>
				<div class="text-right">
					<a href=""><i  class=" inline-block ml-1.5 text-gray-400 transition duration-300 text-base hover:text-yellow-400 mb-3 mt-1"><HeartOutlined /></i></a>
					
				</div>
			</div>
		</div>
    </a>
    </div>
	
))}
 
</div>
<MiddleBanner/>


 <Footer/>

    </>
  )
}

export default Home;