import "./InsertStudents.css"

import { Link } from "react-router-dom";
import React from "react";

const InsertStudent = () =>{
    return(
        <div className="container-insert">
            <div className="menu-container">
                <h2> Insert a student!</h2>
                <form action="">
                <label htmlFor="name">Student name:</label>
                <input type="text" id="name" name="name"/><br/><br/>
                <label htmlFor="class">Number class:</label>
                <input type="text" id="class" name="class" /><br/><br/>
                <input type="submit" value="Submit" className="button"/>
            </form>
            <Link to={'/'}>
                <button className="button">Back</button>
            </Link>
            </div>
        </div>
    );
};

export default InsertStudent;