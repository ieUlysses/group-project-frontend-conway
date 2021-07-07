import React from "react"

export default function () {
    function submitHandler() {
        console.log("Click click")
        //upload function with axios specify route for emergency Contact form
    }

    return (
        <>
            <form>
                <label htmlFor="eContact" className="form-label"> Full name</label>

                <input type="text" id="eContact" className="form-control"></input>

                <label htmlFor="ePhone" className="form-label"> Phone number</label>

                <input type="tel" id="ePhone" className="form-control"></input>

                <label htmlFor="allergies" className="form-label"> Does yur child have any of the following Allergies?</label>

                <div className="input-group" id="allergies">
                    <label htmlFor="tNuts">Tree Nuts</label>
                    <input type="radio" value="tNuts" id="tNuts"></input>

                    <label htmlFor="wheat">Wheat</label>
                    <input type="radio" value="wheat" id="wheat"></input>

                    <label htmlFor="milk">Milk</label>
                    <input type="radio" value="milk" id="milk"></input>
                </div>

                <button onClick={submitHandler()}>
                    Submit
                </button>
            </form>
        </>
    )
}