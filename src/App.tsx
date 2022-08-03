import './App.css';

import { Route, Routes } from 'react-router-dom';

import InsertStudent from './InsertStudents';
import Menu from './Menu';
import React from 'react';
import SeeStudents from './SeeStudents';
import StudentGrade from './StudentGrade';

// import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
    {/* <Menu></Menu> 
    <InsertStudent></InsertStudent>
    <StudentGrade></StudentGrade>
    <SeeStudents></SeeStudents>*/}
      <Routes>
        <Route path="/" element={<Menu/>}></Route>
        <Route path="/insertStudents" element={<InsertStudent/>}></Route>
        <Route path="/studentGrade" element={<StudentGrade/>}></Route>
        <Route path="/seeStudents" element={<SeeStudents/>}></Route>
      </Routes>
    </>
  );
}

export default App;
