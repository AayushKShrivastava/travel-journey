import React from "react"
import point from "../images/location.png"

export default function Cards(props){
    return (
        <section className="card">
            <img src={props.item.imageUrl} alt="photos" className="img"/>
            <div className="info">
                <div className="location">
                    <img src={point} alt="location"/>
                    <h3>{props.item.location}</h3>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <strong>{props.item.startDate} - {props.item.endDate}</strong>
                <p>{props.item.description}</p>
            </div>
        </section>
    )
}