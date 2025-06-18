"use client"
import AddFoodItem from "@/app/_components/addFoodItem"
import FoodItemList from "@/app/_components/foodItemsList"
import RestaurentHeader from "@/app/_components/restaurentHeader"
import { useState } from "react"
const Dashboard = ()=>{
const [addItem, setAddItem]= useState(false)
    return(
    <>
    <RestaurentHeader/>
     <button onClick={()=>setAddItem(true)}>Add item</button>
     <button onClick={()=>setAddItem(false)}>Dashboard</button>
    {addItem ? <AddFoodItem setAddItem={setAddItem}/> : <FoodItemList/> }
    </>

    )
}
export default Dashboard
 