
import React from "react"

export default function () {


    return (

        <div className="container vh-25">
            <table className="w-100 h-100 text-center bg-info rounded-pill">
                <thead>
                    <tr>
                        <th scope="col">Age-group</th>
                        <th scope="col" >Mo</th>
                        <th scope="col">Tu</th>
                        <th scope="col" >We</th>
                        <th scope="col">Th</th>
                        <th scope="col" >Fr</th>
                    </tr>
                </thead>
                <tr>
                    <th scope="row">0-6</th>
                    <td>9am</td>
                    <td></td>
                    <td>12:00</td>
                    <td></td>
                    <td>17:00</td>
                </tr>
                <tr>
                    <th scope="row">6-8</th>
                    <td>13:00</td>
                    <td></td>
                    <td>15:00</td>
                    <td></td>
                    <td>18:00</td>
                </tr>
                <tr>
                    <th scope="row">8-10</th>
                    <td>19:00</td>
                    <td></td>
                    <td>14:30</td>
                    <td></td>
                    <td>17:30</td>
                </tr>
            </table>
        </div>
    )
}