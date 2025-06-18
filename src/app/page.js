"use client"
import { useEffect, useState } from "react";
import CustomerHeader from "./_components/CustomerHeader";
import { useRouter } from "next/navigation";

export default function Home() {
  const [locations, setLocations] = useState([])
  const [selectedLocation, setSelectedLocation] = useState('')
  const [showLocation, setShowLocation] = useState(false)
  const [restaurent, setRestaurent] = useState([])
  const router = useRouter()

  useEffect(() => {
    loadLocations()
    loadRestaurent()
  }, [])

  const loadLocations = async () => {
    let response = await fetch("http://localhost:3000/api/customer/locations")
    response = await response.json()
    if (response.success) {
      setLocations(response.result)
    }
  }
  const loadRestaurent = async (params) => {
    let url = "http://localhost:3000/api/customer"
    if (params?.location) {
      url += "?location=" + params.location
      console.log(url)
    } else if (params?.restaurent) {
      url += "?restaurent=" + params.restaurent
      console.log(url)
    }
    let response = await fetch(url)
    response = await response.json()
    if (response.success) {
      console.log(response.result);
      setRestaurent(response.result)
    }
  }
  const handleListItem = (item) => {
    setSelectedLocation(item)
    setShowLocation(false)
    loadRestaurent({ location: item })
  }

  return (
    <main>
      <CustomerHeader />
      <div className="main-page-banner">
        <h1>Food Delivery App</h1>
        <div className="input-wrapper">
          <input type="text" onClick={() => setShowLocation(true)} value={selectedLocation} className="select-input" placeholder="Select Location" />
          <ul className="location-list">
            {
              showLocation && locations.map((item, idx) => (
                <li key={idx} onClick={() => handleListItem(item)}>{item}</li>
              ))
            }
          </ul>
          <input type="text"
            onChange={(e) => loadRestaurent({ restaurent: e.target.value })}
            className="search-input" placeholder="Enter Food or Restaurent" />
        </div>
      </div>
      <div className="restaurent-list-container" >
        {restaurent.map((item,idx) => (
          <div onClick={()=>router.push("explore/"+item.name+"?id="+item._id)} key={idx} className="restaurent-wrapper">
            <div className="heading-wrapper">
              <h3>{item.name}</h3>
              <h5>Contact : {item.contact}</h5>
            </div>
            <div className="address-wrapper">
              <div>{item.city}</div>
              <div className="address">{item.address}, Email : {item.email}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}