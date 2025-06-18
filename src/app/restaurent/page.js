"use client"
import { useState } from "react"
import RestaurentLogin from "../_components/restaurentLogin"
import RestaurentSignUp from "../_components/restaurentSignUp"
import RestaurentHeader from "../_components/restaurentHeader"

const Restaurent = () => {
    const [login, setLogin] = useState(true)
    return (
        <div className="container">
            <h1>Restaurent Login/SignUp Page</h1>
            <RestaurentHeader/>
            {login ? <RestaurentLogin /> : <RestaurentSignUp />}
            <button className="button-link" onClick={() => setLogin(!login)}>{login ? "Already have Account ? Login" : "Do not have account? SignUp"}</button>
        </div>
    )
}

export default Restaurent