import React from 'react'
import  {useState} from 'react'
import './Interview.css';

function Interview() {
    const [formData,setFormData]=useState({
        Fullname:'',
        email:'',
        gender:'',
        languages:'',
        birthdate:'',
        interest:'',
    });

  return (
    <div>
<form>
          <h2>File Upload form</h2>
      <input type="text" name="Fullname" placeholder='Enter your  name'/><br/>
    <input type="email" name="Fullname" placeholder='Enter your  email'/><br/>
   Gender: <br/>
   <input type="radio" name='gender' value="male"/>Male 
      <input type="radio" name='gender' value="female"/>Female<br/>
   Languages: <br/>
      <input type="checkbox" name="languages" value="english"/>English <br/>
    <input type="checkbox" name="languages" value="english"/>Marathi  <br/>
      <input type="checkbox" name="languages" value="english"/>Hindi  <br/>
       Birth Date:<br/> 
        <input type="date" name="birthdate"/><br/><br/>
        <select>
        <option value="">Choose your option</option>
        <option value="coding">Coding</option>
        <option value="coding">Music</option>
        <option value="coding">Traveling</option>
        </select><br/><br/>

        <button type="submit">Submit</button>
</form>
    </div>
  )
}

export default Interview
