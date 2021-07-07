

import { React, useState } from "react"

import ChildData from "./ChildData"
import EContact from "./EContact"
import UserData from "./UserData"

export default function () {
    /* Setting use state = true gives a default ie appears when page is loaded/ refreshed  */

    const [child, setChild] = useState(true)
    const [eContact, seteContact] = useState(false)
    const [userData, setUserData] = useState(false)

    return (
        /* Wrapper not necessary for fianl draft...for development needed because it supplies base size where bootstrap can match*/
        <div className="vw-100 vh-100   d-flex align-items-center">
            {/* Parent */}
            <div className="container  d-flex  w-75 h-75    bg-primary rounded">
                {/* Flex componant (btn nav) todo:Give each btn an onclick event  */}
                <div className=" d-flex flex-column h-100 w-25  rounded">

                    <button className="mt-5 bg-light rounded" onClick={() => setUserData(!userData)}>About me</button>

                    <button className="mt-5 bg-light rounded" onClick={() => setChild(!child)}>My kid</button>

                    <button className="mt-5 bg-light rounded" onClick={() => seteContact(!eContact)}>Emergency contact</button>
                </div>

                {/* Wrapper for forms. */}
                <div className=" w-50 h-100 bg-info ms-5 rounded border-bottom border-end border-dark border-5">
                    {child && <ChildData />}
                    {eContact && <EContact />}
                    {userData && <UserData />}
                </div>
            </div>
        </div>
    )
}

