import React from "react"
import NavBar from "./components/NavBar"
import Cards from "./components/Cards"
import data from "./data"

export default function App(){
    const cards = data.map(item => {
        return (
            <div className="content">
                <Cards
                    item={item}
                />
                <hr />
            </div>
        )
    })
    return (
        <div>
            <NavBar />
            {cards}
        </div>
    )
}