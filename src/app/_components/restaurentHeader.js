"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
const RestaurentHeader = () => {
    const [details, setDetails] = useState()
    const router = useRouter()
    const pathName = usePathname()

    useEffect(() => {
        let data = localStorage.getItem("restaurentUser")
        if (!data && pathName == "/restaurent/dashboard") {
            router.push("/restaurent")
        } else if(data && pathName == "/restaurent"){
            router.push("/restaurent/dashboard")
        }else{
            setDetails(JSON.parse(data))
        }
    }, [])
    const handleLogOut=()=>{
        localStorage.removeItem("restaurentUser")
        router.push("/restaurent")
    }
    return (
        <div>
            <div className="logo">
                <img style={{ width: 100 }}
                    src="https://s.tmimgcdn.com/scr/1200x627/242400/food-delivery-custom-design-logo-template_242462-original.png" />
            </div>
            <ul>
                <li><Link href="/restaurent">Home</Link></li>
                {details && details.name ? 
                     <button onClick={handleLogOut}>Log Out</button>
                    :
                     <li><Link href="/restaurent">Login/SignUp</Link></li>
                     
                    }
            </ul>
        </div>
    )
}

export default RestaurentHeader