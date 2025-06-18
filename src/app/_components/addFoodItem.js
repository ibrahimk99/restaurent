import { useState } from "react"

const AddFoodItem = ({setAddItem})=>{
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(false)

    const handleAddFood =async ()=>{
        if(!name || !price || !image || !description){
            setError(true)
            return false
        }
        let resto_id;
        const restaurentData =JSON.parse( localStorage.getItem("restaurentUser"))
        if(restaurentData){
            resto_id = restaurentData._id
        }
        let response = await fetch("http://localhost:3000/api/restaurent/foods",{
            method:"POST",
            body: JSON.stringify({name, price, image, description, resto_id})
        })
        response = await response.json()
        if(response.success){
            setAddItem(false) 
        }else{
            alert("Food item not Added")
        }
        setName("")
        setDescription("")
        setImage("")
        setPrice("")
    }
    return(<div>
    <h1>Add new Food Item</h1>
            <div className="input-wrapper">
                    <input value={name} onChange={(e)=>setName(e.target.value)} className="input-field" type="text" placeholder="Enter Name" />
                    {error && !name && <span>Name must be enter</span>}
                </div>
                <div className="input-wrapper">
                    <input value={price} onChange={(e)=>setPrice(e.target.value)} className="input-field" type="text" placeholder="Enter Price" />
                        {error && !price && <span>Price must be enter</span>}
                </div>
                <div className="input-wrapper">
                    <input value={image} onChange={(e)=>setImage(e.target.value)} className="input-field" type="text" placeholder="Enter Image Url" />
                        {error && !image && <span>Image Url must be enter</span>}
                </div>
                <div className="input-wrapper">
                    <input value={description} onChange={(e)=>setDescription(e.target.value)} className="input-field" type="text" placeholder="Enter Description" />
                        {error && !description && <span>Description must be enter</span>}
                </div>
                <div className="input-wrapper">
                   <button onClick={handleAddFood} className="button">Add Food</button>
                </div>
    </div>)
}
export default AddFoodItem