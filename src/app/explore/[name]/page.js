"use client"
import { useSearchParams } from "next/navigation";
import { use, useEffect, useState } from "react"
const Page = ({ params }) => {
    const { name } = use(params)
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const [restaurentDetails, setRestaurentDetails] = useState()
    const [foodItems, setFoodItems] = useState()

    useEffect(() => {
        loadRestaurent()
    },[])
    const loadRestaurent = async () => {

        console.log(id)
        let response = await fetch("http://localhost:3000/api/customer/" + id)
        response = await response.json()
   if(response.success){
    setRestaurentDetails(response.restaurentDetails)
    setFoodItems(response.foodItems)
   }
    }
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
                </div>
            ))}
        </div>
    </div>
       
    )
}
export default Page