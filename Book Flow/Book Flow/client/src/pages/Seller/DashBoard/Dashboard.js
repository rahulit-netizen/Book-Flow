
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Seller/Sidebar'
import { DollarCircleFilled } from '@ant-design/icons'
import { ShoppingFilled } from '@ant-design/icons'
import { ShoppingCartOutlined } from '@ant-design/icons'
import "./dashboard.css"
import { useContext } from 'react'
import { ProductDataContext } from '../../../Context/ProductDataContext'

const Dashboard = () => {
  
  const [productDataState,setProductDataState] = useContext(ProductDataContext)
  return (
    <>
    <Navbar/>
    <br/>
    <div class=" flex space-between"> 
    <Sidebar/> 

    <div class="product1 ">
    <div className="productTitleContainer">
    <h1 class="text-3xl"> <b>Dashboard</b></h1>
       </div>

    {/* <div class=" flex inline-block"> */}
<div class="  w-80 m-2.5 p-6 bg-white border border-gray-200 rounded-lg shadow inline-block hover:shadow-2xl ">
 
<h5 class="text-0.5xl font-semibold tracking-tight text-teal-900 ">
 <DollarCircleFilled style={{ fontSize: '28px', color: '#000000' }} />   
  <i class="ml-4">Total Sales </i>
 <p class="ml-11 text-sm"> $4566 </p>
  </h5>
   </div>

   <div class="  w-80 m-2.5 p-6 bg-white border border-gray-200 rounded-lg shadow inline-block hover:shadow-2xl ">
   <h5 class="text-0.5xl font-semibold tracking-tight text-teal-900 ">
   <ShoppingCartOutlined style={{ fontSize: '28px', color: '#000000'}}  />   
  <i class="ml-4">Total Orders </i>
 <p class="ml-11 text-sm"> 7887877878 </p>
  </h5>
   </div>

   <div class="  w-80 m-2.5 p-6 bg-white border border-gray-200 rounded-lg shadow inline-block hover:shadow-2xl ">
   <h5 class="text-0.5xl font-semibold tracking-tight text-teal-900 ">
  <ShoppingFilled style={{ fontSize: '28px', color: '#000000'}}  />   
   <i class="ml-4">Total Products</i>
  <p class="ml-11 text-sm"> {productDataState.length} </p>
   </h5>
    </div>

   <div class=" max-w-xl  ml-32 h-2/5 m-2.5 p-6 bg-white border border-gray-200 rounded-lg shadow  hover:shadow-xl inline-block">
   <h5 class="text-0.5xl font-semibold tracking-tight text-teal-900 ">
  {/* <ShoppingFilled style={{ fontSize: '28px', color: '#000000'}}  />    */}
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
   </h5>
    </div>

    


    <div class=" max-w-5xl h-1/5 m-2.5 p-6 bg-white border border-gray-200 rounded-lg shadow  hover:shadow-xl ">
   <h5 class="text-0.5xl font-semibold tracking-tight text-teal-900 ">
  {/* <ShoppingFilled style={{ fontSize: '28px', color: '#000000'}}  />    */}
      Body
   </h5>
    </div>


</div> 

    {/* </div> */}
</div>



    </>
  )
}

export default Dashboard