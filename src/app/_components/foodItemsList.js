
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const FoodItemList = ()=>{
    const [foodItems, setFoodItems]=useState()
    const router = useRouter()
    useEffect(()=>{
loadFoodItem()
    },[])
    const loadFoodItem = async ()=>{
        const restaurentData = JSON.parse(localStorage.getItem("restaurentUser"))
        const resto_id = restaurentData._id
        let response = await fetch("http://localhost:3000/api/restaurent/foods/"+resto_id)
        response = await response.json()
        if(response.success){
            setFoodItems(response.result)
        }else{
            alert("food item list not loading")
        }
    }
    const handleDeleteFood =async (id)=>{
        let response = await fetch("http://localhost:3000/api/restaurent/foods/"+id,{
            method:"DELETE"
        })
        response = await response.json()
        if(response.success){
            loadFoodItem()
        }else{
            alert("food item not deleted")
        }
    }

    return(
    <><h1>Food Items List</h1>
    <table border="black">
        <thead>
            <tr>
                <td>Sr #</td>
                <td>Name</td>
                <td>Price</td>
                <td>Description</td>
                <td>Image</td>
                <td>Operation</td>
            </tr>
        </thead>
        <tbody>
            {foodItems && foodItems.length>0 && foodItems.map((food,index)=>(
            <tr key={index}>
                <td>{index +1}</td>
                <td>{food.name}</td>
                <td>{food.price}</td>
                <td>{food.description}</td>
                <td><img src={food.image} alt="fruit" width="200" /></td>
                <td>
                    <button onClick={()=>handleDeleteFood(food._id)}>Delete</button>
                    <button onClick={()=>router.push("dashboard/"+food._id)} >Edit</button></td>
            </tr>
))}
        </tbody>
    </table>
    </>)
}
export default FoodItemList