
import React from 'react';
import { Link } from 'react-router-dom';

const MiddleBanner = () => {
   
        return (
            <div class="bg-gray-100 mt-0">
            <section class="bg-center bg-repeat bg-[url('https://res.cloudinary.com/dzgvbxjqd/image/upload/v1686149728/Through_main_room_door_to_back_of_1st_floor_yzovmy.jpg')] bg-gray-800 bg-blend-multiply ">
            <div className='h-1/6 text-white'>
            <div className=' flex flex-1  px-24 py-24 my-36 '>
                <div >
        <h1 className='mb-4 text-xl font-bold tracking-tight leading-none text-white md:text-xl lg:text-4xl'>Where To Sell Used Second Hand Books?
      </h1> 
      <br/>
         Post an Ad now and one of you will be lucky to have your ad featured. Featured Ad gets more buyer interaction.</div>
            
          
            
              
              
              <Link to="/sell">
              <button className="productAddButton w-36 border-none p-1.5 bg-teal color-white rounded-md cursor-pointer ml-52 mt-8 hover:bg-red-600">POST FREE AD</button>
            </Link>
            </div>
            </div>
              </section>
              
              
            </div>
          );
        };

export default MiddleBanner;