import "./Menu.css"

import { Link } from "react-router-dom";
import React from "react";

function Menu(){
    return(
        <div className='menu-container'>
            <h1>Student catalog</h1>
            <div className="navigator">
                <ul>
                {/* <button className="button">Insert students!</button>
                <button className="button">Add grade for existing students!</button>
                <button className="button">See student's catalog.</button> */}
                    <Link to={"./InsertStudents"}>
                        <button className="button">Insert students!</button>
                    </Link>
                     <Link to={"./AddGrades"}>
                        <button className="button">Add grade for existing students!</button>
                    </Link>
                    <Link to={"./SeeStudents"}>
                        <button className="button">See student's catalog.</button>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Menu;