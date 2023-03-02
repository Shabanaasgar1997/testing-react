import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const SendDatatoServer = (e) => {
    e.preventDefault();
    axios.post("https://63fcd2fe859df29986c58cbe.mockapi.io/Crud", {
      firstName,
      lastName,
      email,
      phonenumber,
    });
    console.log(firstName, lastName, email, phonenumber);

    alert("Data pushed sucessfully");
    navigate("/read");
  };
  return (
    <>
      <div className="container">
        <form onSubmit={SendDatatoServer}>
          <label>fName</label>
          <input
            type="text"
            className="form-control w-50"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>lName</label>

          <input
            type="text"
            className="form-control w-50"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>email</label>

          <input
            type="email"
            className="form-control w-50"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>phone</label>

          <input
            type="number"
            className="form-control w-50"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button className="btn btn-success my-2" type="submit">
            Send data to the server
          </button>
        </form>
      </div>
    </>
  );
}

export default Create;

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// import { Link, useNavigate } from "react-router-dom";

// function Create() {

//     const [firstName,setFirstName]=useState('');
//     const [lastName,setLastName]=useState('');
//     const [email,setEmail]=useState('');
//     const [phonenumber,setPhoneNumber]=useState('');

//     let navigate=useNavigate();
//     const URL="https://63fcd2fe859df29986c58cbe.mockapi.io/Crud"

//     const pushData=(e)=>{
//     e.preventDefault();
//     axios.post(URL,{firstName,lastName,email,phonenumber})
// //
//     alert('Data PusheD SuccessFully')
//     console.log(firstName,lastName,email);
//     navigate("/read");
// }

//   return(<>

//   <div className="container ">
//     <form className="" onSubmit={pushData}>
//         {/* {firstName} */}
//         <label>FirstName</label>
//         <input type="text" className="form-control w-50"
//         onChange={(e)=>setFirstName(e.target.value)} value={firstName} />

//         <label>Last Name</label>
//         <input type="text" className="form-control w-50"
//         onChange={(e)=>setLastName(e.target.value)} value={lastName}
//         />

//         <label>Email</label>
//         <input type="email" className="form-control w-50"
//         onChange={(e)=>setEmail(e.target.value)} value={email}
//         />
//         <label>Phone Number</label>
//         <input type="number" className="form-control w-50"
//         onChange={(e)=>setPhoneNumber(e.target.value)} value={phonenumber}
//         />

//         <button type="submit" className="btn btn-success my-2">Push data to the Server</button>

//     </form>
//     {/* <Link to="/read" kalyan={firstName}>Read</Link> */}

//   </div>

//   </>)
// }

// export default Create;
