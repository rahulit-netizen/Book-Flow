
import React from 'react';

const Banner = () => {
   
return (
<>  
<section class="bg-center bg-repeat bg-[url('https://res.cloudinary.com/dzgvbxjqd/image/upload/v1686133255/Tumblr_1_wwvn5g.jpg')] bg-gray-700 bg-blend-multiply ">
    <div class="flex px-4  max-w-screen-xl py-2 lg:py-2 h-screen">
     <div className=' flex flex-1  px-28 py-28 my-36 '>
     <div className='text-white' >
<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">6562 Used Books On Sale</h1>
<br/>
Buy And Sell Used Books In India.Search And Buy Second Hand Books Near You. Post Free Ad To Sell Old Books In City. Download the app now
</div>
</div>
          
            <div className="flex flex-1 justify-center px-16 py-28 ">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-transparent ">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Register Yourself
                      </h1> */}
                      <form className="space-y-4 md:space-y-6"
                    //    onSubmit = {handleSubmit}
                       >
                          <div>
                              <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                              <input type="text" name="Name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required="" placeholder='What Are You Looking For....'
                            //    onChange = {handleChange}
                               />
                          </div>
                          <div>
                              <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Category</label>
                              <input type="text" name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required="" 
                              placeholder="Category"
                            //   onChange = {handleChange}
                              />
                          </div>
                          <div>
                              <label for="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                              <input type="text" name="loaction" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" 
                              placeholder="Location"
                            //   onChange = {handleChange}
                              />
                          </div>
                        <br/>
                        {/* {register ? (
                        <p className="text-success">{message}</p>
                        ) : (
                        //   <p className="text-danger">You Are Not Registered</p>
                        null
                        )} */}
        
                          <button  className="w-full text-white bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                          Search
                          </button>
                        </form>
                  </div>
              </div>
              </div>
              </div>
        
    
</section>
           </>
          );
        };

export default Banner;