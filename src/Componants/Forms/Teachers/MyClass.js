import React from "react"

export default function () {
    function submitHandler() {
        console.log("click")
    }
    return (
        <>
            <form>

                <label htmlFor="className" className="form-label">What is your class's name?</label>

                <input type="text" id="className" className="form-control"></input>


                <label htmlFor="location" className="form-label"> Where does the class take place</label>

                <input type="text" id="location" className="form-control"></input>

                <label htmlFor="subject-category" className="form-label">Which category does your class fall into?
                </label>
                <div className="input-group" id="subject-category">
                    <label htmlFor="academic">Academic</label>
                    <input type="radio" value="academic" id="academic"></input>

                    <label htmlFor="sport">Sport</label>
                    <input type="radio" value="sport" id="sport"></input>

                    <label htmlFor="creative">Creative</label>
                    <input type="radio" value="creative" id="creative"></input>

                    <label htmlFor="languages">Languages</label>
                    <input type="radio" value="languages" id="languages"></input>
                </div>

                <label htmlFor="subjects" className="form-label">What Subject will you teach?</label>
                <div className="input-group" id="subjects">
                    <label htmlFor="math">Math</label>
                    <input type="radio" value="math" id="math"></input>

                    <label htmlFor="reading">Reading</label>
                    <input type="radio" value="reading" id="reading"></input>

                    <label htmlFor="writing">Writing</label>
                    <input type="radio" value="writing" id="writing"></input>


                    <label htmlFor="drawing">Drawing</label>
                    <input type="radio" value="drawing" id="drawing"></input>

                    <label htmlFor="painting">Painting</label>
                    <input type="radio" value="painting" id="painting"></input>

                    <label htmlFor="art">Art</label>
                    <input type="radio" value="art" id="art"></input>


                    <label htmlFor="horse-riding">Horse-riding</label>
                    <input type="radio" value="horse-riding" id="horse-riding"></input>


                    <label htmlFor="hiking">Hiking</label>
                    <input type="radio" value="hiking" id="hiking"></input>

                    <label htmlFor="gymnastics">Gymnastics</label>
                    <input type="radio" value="gymnastics" id="gymnastics"></input>

                    <label htmlFor="english">English</label>
                    <input type="radio" value="english" id="english"></input>

                    <label htmlFor="german">German</label>
                    <input type="radio" value="german" id="german"></input>

                    <label htmlFor="spanish">Spanish</label>
                    <input type="radio" value="spanish" id="spanish"></input>


                </div>

                <button className="me-auto" onClick={submitHandler}>
                    Click me
                </button>
            </form>
        </>
    )
}