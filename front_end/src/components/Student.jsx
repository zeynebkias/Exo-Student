import React from "react";
import {useState} from "react"
import axios from "axios";

function Student(){
    const [student , setStudent] = useState ({
        FirstName : '',
        LastName : '',
        Email : '',
        Group : '',
    });


const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/student/student', student)
    .then(res => console.log(res.data))

}

    return <div>
<form onSubmit={handleSubmit}>
<input 
type="text"
placeholder="FirstName" 
required
onChange={(e)=>{
    setStudent({
        ...student,
        FirstName : e.target.value,

    })
}}


/>

<input 
type="text"
placeholder="LastName" 
required
onChange={(e)=>{
    setStudent({
        ...student,
        LastName : e.target.value,

    });
}}
/>

<input 
type="text"
placeholder="Email" 
required

onChange={(e)=>{
    setStudent({
        ...student,
        Email : e.target.value,

    });
}}
/>

<input 
type="text"
placeholder="Group" 
required

onChange={(e)=>{
    setStudent({
        ...student,
        Group : e.target.value,

    });
}}
/>

<input type="submit" value="Add Student"/>
</form>
    </div>;
}

export default Student;