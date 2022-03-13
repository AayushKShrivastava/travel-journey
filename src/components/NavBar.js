import React from "react"
import logo from "../images/logo.png"
export default function NavBar(){
    return (
        <div className="navbar">
            <img src={logo} alt="logo"/>
            <p>my travel journal.</p>
        </div>
    )
}