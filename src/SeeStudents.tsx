import "./SeeStudents.css"

import { Link } from "react-router-dom";
import React from "react";

const SeeStudents =() =>{
    const students = [{id:"4b57cf85-330d-4db7-8d97-1da02f3f6c2d",name:"Ada",nrClass:"7"},{id:"f6eefc4e-b92e-4b47-84dc-f56bc6db81fc",name:"Ada",nrClass:"6"},{id:"438c5a04-39ff-4016-b92f-8cda3b41f509",name:"Maria",nrClass:"8"}];
    //const grade = [{id:"c9c858a9-df2f-4586-b645-ce950da8d623",idStudent:"4b57cf85-330d-4db7-8d97-1da02f3f6c2d",subject:"sport",grade:"5"},{id:"b1c87c07-3bc1-4708-bfb4-171fc7070eab",idStudent:"4b57cf85-330d-4db7-8d97-1da02f3f6c2d",subject:"romana",grade:"6"},{id:"592efa94-b2dd-4743-ae66-462481dadbd9",idStudent:"438c5a04-39ff-4016-b92f-8cda3b41f509",subject:"mate",grade:"2"}];
    

    const tableRows = students.map(student => (<tr>
        <td>{student.name}</td>
        <td>{student.nrClass}</td>
        <td>TBD</td>
        <td>10</td>
    </tr>))
    return(
        <div className="container-students">
        <h2>Student Catalog</h2>
        <table className="studentTable">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Number Class</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Grade</th>
                    </tr>
                </thead>
                <tbody>
                {tableRows}
                </tbody>
            </table>

            <Link to={'/'}>
                <button className="button">Back</button>
            </Link>
    </div>
    );
}

export default SeeStudents