"use client"
import { useSearchParams } from "next/navigation";
import { use, useEffect, useState } from "react"
const Page = ({ params }) => {
    const { name } = use(params)
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const [restaurentDetails, setRestaurentDetails] = useState()
    const [foodItems, setFoodItems] = useState()
    const [cartData, setCartData] = useState()

    useEffect(() => {
loadRestaurent()         
    },[])
    const loadRestaurent = async () => {
       let response = await fetch("http://localhost:3000/api/customer/" + id)
        response = await response.json()
  try{ if(response.success){
    setRestaurentDetails(response.restaurentDetail)
    setFoodItems(response.foodItem)
    console.log(response.restaurentDetail)
    console.log(response.foodItem);
   
   }
   }catch(error){
        console.log(error)
    }
    } 
    // const addToCart=(item)=>{
    //     console.log(item);
        
    //     setCartData(item)

    // }
    return ( <div>
 <div className="main-page-banner">
            <h1>{decodeURI(name)}</h1>
        </div>
        <div>
            <h3>{restaurentDetails.contact}</h3>
            <h3>{restaurentDetails.city}</h3>
            <h3>{restaurentDetails.address}</h3>
             <h3>{restaurentDetails.email}</h3>
        </div>
        <div>
            {foodItems.map((item)=>(
                <div key={item._id}>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div><img src={item.image} alt="" /></div>
                <div>{item.description}</div>
                {/* <button onClick={()=>addToCart(item)}>Add to Cart</button> */}
                </div>
            ))}
        </div>
    </div>
       
    )
}
export default Page