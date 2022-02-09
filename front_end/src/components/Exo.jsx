import React, { useEffect } from "react";
import {useState} from "react"
import axios from "axios";

function Exo(){

    const [exo, setExo] = useState({
        title: '',
        description: '',
        duration: '',
        student : [],
        
        });

    const [students, setStudents] = useState([])


    useEffect(()=>
axios.get('http://localhost:5000/student/students')
    .then((res) =>  setStudents(res.data))
    .then( console.log(students))

    
    ,[]);




const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/exo/exo', exo)
    .then(res => console.log(res.data));
    setExo ({
        title: "",
        description: "",
        date: "",
        duration: "",
        students: [],
      });

}

return <div>
<form onSubmit={handleSubmit}>
<input
        type="text"
        placeholder="Exercise title"
        required
        value={exo.title}
        onChange={(e) => 
            setExo({
                ...exo,
                title: e.target.value,
              })
            }
          />

<input
        type="text"
        placeholder="Exercise description"
        required
        value={exo.description}
        onChange={(e) =>
          setExo({
            ...exo,
            description: e.target.value,
          })
        }
      />

<input
        type="date"
        value={exo.date}
        required
        onChange={(e) =>
          setExo({
            ...exo,
            date: e.target.value,
          })
        }
      />

<input 
type="number" 
value={exo.duration} 
placeholder='Enter duration' 
required   
onChange={(e) => 
    setExo({
          ...exo,
          duration:e.target.value
      })
    }/>




<select onChange={(e)=>{
console.log(e.target.value)
       setExo({
         ...exo,
         students: e.target.value,
       });
    }}>
     <option   value="default">--Please choose one or more students--</option>
     {students.map((student, index) => {
        return <option
         key={index} 
         value={student._id}>{student.FirstName} {student.LastName}</option>;
    })}
 
    </select>

      <input type="submit" value="submit" />
    </form>
</div>
};



export default Exo;