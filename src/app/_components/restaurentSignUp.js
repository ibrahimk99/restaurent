
import { useRouter } from 'next/navigation'
import { useState } from "react"

const RestaurentSignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [c_password, setC_password] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")
    const [error, setError] = useState(false)
    const [matchPass, setMatchPass] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== c_password) {
            setMatchPass(true)
        } else {
            setMatchPass(false)
        }
        if (!name || !email || !password || !c_password || !city || !address || !contact) {
            setError(true)
            return false
        } else {
            setError(false)
        }
        let response = await fetch("http://localhost:3000/api/restaurent", {
            method: "POST",
            body: JSON.stringify({ name, email, password, city, address, contact })
        })
        response = await response.json()
        if (response.success) {
            const { result } = response
            delete result.password
            if (result.name !== "") {
                localStorage.setItem("restaurentUser", JSON.stringify(result))
                router.push("/restaurent/dashboard")
            } else return
        }
    }

    return (
        <>
            <h3>SignUp Component</h3>
            <center>
                <div className="input-wrapper">
                    <input className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" />
                    {error && !email && <span>Email is not empty</span>}
                </div>
                <div className="input-wrapper">
                    <input className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" />
                    {error && !password && <span>Password is not empty</span>}
                </div>
                <div className="input-wrapper">
                    <input className="input-field" value={c_password} onChange={(e) => setC_password(e.target.value)} type="password" placeholder="Confirm Password" />
                    {error && !c_password && <span>Confirm Password is not empty</span>}
                    {matchPass && <span>Password did not match</span>}
                </div>
                <div className="input-wrapper">
                    <input className="input-field" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Restaurent Name" />
                    {error && !name && <span>Name is not empty</span>}
                </div>
                <div className="input-wrapper">
                    <input className="input-field" value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Enter City" />
                    {error && !city && <span>City is not empty</span>}
                </div>
                <div className="input-wrapper">
                    <input className="input-field" value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Enter Address" />
                    {error && !address && <span>Address is not empty</span>}
                </div>
                <div className="input-wrapper">
                    <input className="input-field" value={contact} onChange={(e) => setContact(e.target.value)} type="text" placeholder="Enter Contact #" />
                    {error && !contact && <span>Contact is not empty</span>}
                </div>
                <div className="input-wrapper">
                    <button className="button" onClick={handleSubmit}> SignUp</button>
                </div>
            </center>
        </>
    )
}

export default RestaurentSignUp