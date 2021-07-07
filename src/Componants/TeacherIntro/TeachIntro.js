import React from "react"

import placeholder from "../../media/placeholder.jpg"

export default function () {

    return (
        <>

            <div className="container d-flex flex-column w-75  bg-primary rounded-pill text-center text-light" >
                < div className="d-flex justify-content-evenly">

                    <img src={placeholder} className="rounded-pill img-thumbnail w-25">

                    </img>
                    <h1 className="align-self-center">
                        Hi! I'm Mandy
                    </h1>
                </div>


                <p >
                    HI there I am a teacher that went to school in blahId occaecat non in consequat ipsum aute irure minim consequat sit voluptate consectetur culpa. Aliqua duis nostrud tempor occaecat tempor eu officia eiusmod aliqua sint. Sunt veniam qui est sit minim ex tempor aute. Deserunt consectetur commodo sit nisi eiusmod officia Lorem irure. Nostrud id cillum nulla laboris fugiat qui id mollit laboris fugiat dolor dolore laboris Lorem. Nulla nostrud veniam nostrud quis.
                </p>

            </div>

        </>
    )
}