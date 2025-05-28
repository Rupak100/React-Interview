import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

const LeaderBoard = () => {
    const [students,setStudents] =useState([
        {id:1,name:"rupak",score:"6.7"},
        {id:2,name:"suhaib",score:"4"},
        {id:3,name:"ankur",score:"3.5"},
        {id:4,name:"nand",score:"4.5"},

    ]);


    const getHighest =()=>{
        return Math.max(...students.map((s)=>s.score
    ))
    };

    const memogize =useMemo(()=>{return getHighest()},[students])
  return (
    <div>
    <h4>LeaderBoard</h4>
    <h4>Highest Score : {memogize}</h4>
        <table  border="1"
        style={{
          width: "500px",
          height: "auto",
          borderCollapse: "collapse",
          fontSize: "18px",
          textAlign: "center",
        }}>
          <thead>
            <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>SCORE</td>
            </tr>
          </thead>
          <tbody>
            {students.map((stud)=>(
                <tr>
                    <td>{stud.id}</td>
                    <td>{stud.name}</td>
                    <td>{stud.score}</td>
                </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default LeaderBoard