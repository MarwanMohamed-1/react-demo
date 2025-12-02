import React from "react";
import { useState } from "react";
function Form(params) {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const nameHandler = (value) => {
        setName(value);
    }
    const emailHandler = (value) => {
        setEmail(value);
    }
    return(
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log("Form submitted");
                console.log("Name is"+ name, "Email is"+email);
            }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" onChange={(event)=>{
            nameHandler(event.target.value);
          }}/>
          <br /><br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" onChange={(e)=>{
            emailHandler(e.target.value);
          }}/>
          <br /><br />
          <button type="submit">Submit</button>    
          </form>
        </div>
    );
}
export default Form;