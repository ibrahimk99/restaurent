"use client"
import { useRouter } from "next/navigation";
import { useState, use, useEffect } from "react"

const EditFoodItem = ({ params }) => {
    const { id } = use(params);

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(false)
    const router = useRouter()

    useEffect(() => {
        handleLoadFoodItem()
    }, [])
    const handleLoadFoodItem = async () => {
        let response = await fetch("http://localhost:3000/api/restaurent/foods/edit/" + id)
        response = await response.json()
        const { name, price, image, description } = response.result
        setName(name)
        setPrice(price)
        setImage(image)
        setDescription(description)
    }
    const handleEditFood = async () => {
        if (!name || !price || !image || !description) {
            setError(true)
            return false
        }
          let response = await fetch("http://localhost:3000/api/restaurent/foods/edit/" + id,{
            method:"PUT",
            body: JSON.stringify({name, price, image, description})
          })
        response = await response.json()
        if(response.success){
            router.push("../dashboard")
        }else{
            alert("Data is Not Update")
        }
        
    }
    return (<div>
        <h1>Add new Food Item</h1>
        <div className="input-wrapper">
            <input value={name} onChange={(e) => setName(e.target.value)} className="input-field" type="text" placeholder="Enter Name" />
            {error && !name && <span>Name must be enter</span>}
        </div>
        <div className="input-wrapper">
            <input value={price} onChange={(e) => setPrice(e.target.value)} className="input-field" type="text" placeholder="Enter Price" />
            {error && !price && <span>Price must be enter</span>}
        </div>
        <div className="input-wrapper">
            <input value={image} onChange={(e) => setImage(e.target.value)} className="input-field" type="text" placeholder="Enter Image Url" />
            {error && !image && <span>Image Url must be enter</span>}
        </div>
        <div className="input-wrapper">
            <input value={description} onChange={(e) => setDescription(e.target.value)} className="input-field" type="text" placeholder="Enter Description" />
            {error && !description && <span>Description must be enter</span>}
        </div>
        <div className="input-wrapper">
            <button onClick={handleEditFood} className="button">Update Food</button>
        </div>
        <div className="input-wrapper">
            <button onClick={() => router.push("../dashboard")} className="button">Back to Food Item</button>
        </div>
    </div>)
}
export default EditFoodItem