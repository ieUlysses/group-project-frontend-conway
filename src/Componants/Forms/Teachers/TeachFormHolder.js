

import { React, useState } from "react"

import TeacherData from "./TeacherData"
import MyClass from "./MyClass"

export default function () {
    /* Setting use state = true gives a default ie appears when page is loaded/ refreshed  */

    const [classInfo, setClassInfo] = useState(true)

    const [teacherData, setTeacherData] = useState(false)

    return (
        /* Wrapper not necessary for fianl draft...for development needed because it supplies base size where bootstrap can match*/
        <div className="vw-100 vh-100   d-flex align-items-center">
            {/* Parent */}
            <div className="container  d-flex  w-75 h-75    bg-primary rounded">
                {/* Flex componant (btn nav) todo:Give each btn an onclick event  */}
                <div className=" d-flex flex-column h-100 w-25  rounded">

                    <button className="mt-5 bg-light rounded" onClick={() => setClassInfo(!classInfo)}>My Class</button>

                    <button className="mt-5 bg-light rounded" onClick={() => setTeacherData(!teacherData)}>My Info</button>

                </div>

                {/* Wrapper for forms. */}
                <div className=" w-50 h-100 bg-info ms-5 rounded border-bottom border-end border-dark border-5">
                    {teacherData && <TeacherData />}
                    {classInfo && <MyClass />}

                </div>
            </div>
        </div>
    )
}

