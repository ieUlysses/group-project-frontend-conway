import React from "react"

import "./MediaText.css"
import placeholder from "../../media/placeholder.jpg"

export default function () {

    return (
        <>
            <div className="container rounded-pill h-100 w-50 bg-warning  d-flex justify-content-evenly align-items-center" >


                <img src={placeholder} className="card-img-top w-25 h-100" alt="..." />



                <p>
                    Full-Stack
                </p>


            </div>
        </>
    )
}