
import React from "react"
import placeholder from "../../media/placeholder.jpg"
export default function () {


    return (
        <>
            <div className="container w-75 d-flex align-items-center bg-primary rounded justify-content-between " >
                <img src={placeholder} className="w-50 img-thumbnail rounded-pill" alt="..." />
                <figure className="ms-4">
                    <blockquote className="blockquote text-light">
                        <p>A review from a parent that could be a few lines long. this is just dummy text so we can see how many words some Karen can type before it messes with our componant "(34)"</p>
                    </blockquote>
                    <figcaption className="blockquote-footer text-light">
                        Parent's name <cite title="Source Title">Name name</cite>
                    </figcaption>
                </figure>
            </div>
        </>

    )
}