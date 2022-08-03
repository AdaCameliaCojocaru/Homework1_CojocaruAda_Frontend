import "./StudentGrade.css"

import { Link } from "react-router-dom";
import React from "react";

function StudentGrade (){
    return(
        <div className="container-grade">
            <form action="/action_page.php">
            <label htmlFor="subject">Subject name:</label>
            <input type="text" id="subject" name="subject"/><br/><br/>
            <label htmlFor="grade">Grade:</label>
            <input type="text" id="garde" name="garde"/><br/><br/>
            <input type="submit" value="Submit" className="button"/>
        </form>
        <Link to={'/'}>
            <button className="button">Back</button>
        </Link>
        </div>
    );
}

export default StudentGrade;