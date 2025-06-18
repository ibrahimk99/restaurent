import { useRouter } from "next/navigation"
import { useState } from "react"

const RestaurentLogin = () => {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error, setError] = useState(false)
    const router = useRouter()

const handleSubmit=async ()=>{
    if(!email || !password){
        setError(true)
        return false
    }else{
        setError(false)
    }
  let response =await fetch("http://localhost:3000/api/restaurent",{
    method:"POST",
    body: JSON.stringify({email,password,login:true})
  })
  response = await response.json()
      console.log(response,"response convert")
  if(response.success){

    const {result} = response
    delete result.password
    localStorage.setItem("restaurentUser", JSON.stringify(result))
router.push("/restaurent/dashboard")
  }else{
    alert("Login Failed")
  }
}
    return (
        <>
            <h3>Login Component</h3>
            <center>
                <div className="input-wrapper">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" type="text" placeholder="Enter Email" />
                    {error && !email && <span>Email should not Empty</span>}
                </div>
                <div className="input-wrapper">
                    <input className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" />
                      {error && !password && <span>Password should not Empty</span>}
                </div>
                   <div className="input-wrapper">
                  <button onClick={handleSubmit} className="button"> Login</button>
                </div>
            </center>
        </>
    )
}

export default RestaurentLogin