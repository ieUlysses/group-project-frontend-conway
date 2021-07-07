
import React from "react"

export default function () {

    function submitHandler() {
        alert("Click click")
        //upload function with axios specify route for userData form
    }

    return (

        <>
            <form>

                <label htmlFor="fullName" className="form-label">Full Name</label>

                <input type="text" id="fullName" className="form-control"></input>


                <label htmlFor="address" className="form-label"> Address</label>

                <input type="text" id="address" className="form-control"></input>


                <label htmlFor="eMail" className="form-label"> Email</label>

                <input type="email" id="eMail" className="form-control"></input>


                <label htmlFor="phoneNumberParent" className="form-label"> Parent's phone number</label>

                <input type="text" id="phoneNumberParent" className="form-control"></input>

                <button className="me-auto" onClick={submitHandler}>
                    Click me
                </button>
            </form>
        </>
    )
}
/*
<form>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
                <button type="submit" class="btn btn-primary">Submit</button>
</form> */