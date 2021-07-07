
import React from "react"
import "./linkStyle.css"
export default function () {

    return (
        <>
            <div className=" container rounded-pill d-flex bg-light justify-content-evenly text-center overflow-hidden">
                <div className="row">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Academic</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Math</td>
                                <td>Reading</td>
                                <td>Writing</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Creative</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Drawing</td>
                                <td>Painting</td>
                                <td>Art</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">

                    <table class="table">
                        <thead>
                            <tr>

                                <th scope="col"></th>
                                <th scope="col">Sport</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>Horse riding</td>
                                <td>Hiking</td>
                                <td>Gymnastics</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table">
                        <thead>
                            <tr>

                                <th scope="col"></th>
                                <th scope="col">Languages</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td><a href="https://www.google.com/maps" className="link">Spanish</a></td>
                                <td><a href="https://www.google.com/maps" className="link">English</a></td>
                                <td><a href="https://www.google.com/maps" className="link">German</a></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </>

    )
}