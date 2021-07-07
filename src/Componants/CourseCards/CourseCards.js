import React from "react"

import Preview from "../Preview/Preview"
import "./courseCards.css"
export default function () {

    //create an array with with info below, 
    //each object should pass the title of the course to peak coponant  
    return (
        <>

            <div className="container rounded bg-light hW" >
                <Preview />

                <div className="row bg-info mt-2"  >
                    <div className="col ">
                        Provider
                    </div>
                    <div className="col">
                        Digital Career Institute
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        About
                    </div>
                    <div className="col ">
                        Learn fullstack for Free
                    </div>

                </div>
                <div className="row bg-info">
                    <div className="col">
                        Online
                    </div>
                    <div className="col ">
                        Yes
                    </div>


                </div>
                <div className="row">
                    <div className="col">
                        Rating
                    </div>
                    <div className="col ">
                        *
                    </div>


                </div>
                <div className="row bg-info">
                    <div className="col">
                        Price
                    </div>
                    <div className="col ">
                        Free
                    </div>


                </div>
            </div>

        </>
    )
}