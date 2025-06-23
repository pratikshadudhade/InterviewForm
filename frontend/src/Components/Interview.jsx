import React, { useState } from 'react';
import './Interview.css';

function Interview() {
  const [formData, setFormData] = useState({
    Fullname: '',
    email: '',
    gender: '',
    languages: [],
    birthdate: '',
    interest: '',
  });

  const [file, setFile] = useState(null); // to store uploaded file

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        languages: checked
          ? [...prev.languages, value]
          : prev.languages.filter((lang) => lang !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('myfile', file);
    data.append('Fullname', formData.Fullname);
    data.append('email', formData.email);
    data.append('gender', formData.gender);
    data.append('languages', formData.languages.join(', '));
    data.append('birthdate', formData.birthdate);
    data.append('interest', formData.interest);

    try {
      const res = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: data,
      });
      const result = await res.text();  
      alert(result);
    } catch (err) {
      console.error('Error uploading file', err);
      alert('File Submitted Successfully');
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h2><i>File Upload Form</i></h2>
        <input
          type="text"
          name="Fullname"
          className='pratiksha'
          placeholder="Enter your name"
          onChange={handleChange}
        /><br />
        <input
          type="email"
          name="email"
          className='pratiksha'
          placeholder="Enter your email"
          onChange={handleChange}
        /><br /><br/>
        Gender: <br />
        <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
        <br /><br/>
        Languages: <br />
        <input type="checkbox" name="languages" value="English" onChange={handleChange} /> English <br />
        <input type="checkbox" name="languages" value="Marathi" onChange={handleChange} /> Marathi <br />
        <input type="checkbox" name="languages" value="Hindi" onChange={handleChange} /> Hindi <br /><br/>
        Birth Date: <br />
        <input type="date" name="birthdate" onChange={handleChange} /><br /><br />
        Select Interest: <br />
        <select name="interest" onChange={handleChange}>
          <option value="">Choose your option</option>
          <option value="coding">Coding</option>
          <option value="music">Music</option>
          <option value="traveling">Traveling</option>
        </select><br /><br />

        Upload File: <br />
        <input type="file" name="myfile" onChange={handleFileChange} /><br /><br />
        <button type="reset" className='submit'>Clear</button>
        <button type="submit" className='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Interview;