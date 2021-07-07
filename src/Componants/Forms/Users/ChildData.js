import React from "react"

export default function () {

    function submitHandler() {
        alert("Click click")
        //upload function with axios specify route for Child Data form
    }

    return (
        <>
            <form>

                <label htmlFor="childName" className="form-label"> your kid's name</label>

                <input type="text" id="childName" className="form-control"></input>


                <label htmlFor="nickName" className="form-label"> your kid's name</label>

                <input type="text" id="nickName" className="form-control"></input>

                <label htmlFor="favouritefood" className="form-label"> What's your kids favourite food?</label>

                <input type="text" id="favouritefood" className="form-control"></input>

                <label htmlFor="extra-help" className="form-label"> does your child need any extra support, if so please select a relevent entry from the box below. This allows our teachers to prepare and help deliver the best expeprience possible for your child </label>

                <div className="input-group d-flex justify-content-evenly " id="extra-help">
                    <label htmlFor="Athsama"> Athsma</label>
                    <input type="radio" id="Athsma" value="Athsma"></input>
                    <label htmlFor="Hayfever">Hayfever</label>
                    <input type="radio" id="Hayfever" value="Hayfever"></input>
                    <label htmlFor="Wheelchair">Wheelchair</label>
                    <input type="radio" id="Wheelchair" value="Wheelchair"></input>
                    <label htmlFor="Blind">Blind</label>
                    <input type="radio" id="Blind" value="Blind"></input>
                </div>


                <button onClick={submitHandler}>
                    Submit
                </button>
            </form>
        </>
    )
}