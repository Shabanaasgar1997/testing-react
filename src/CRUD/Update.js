import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Update() {
  const [id, setId] = useState(0);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const navigate=useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setEmail(localStorage.getItem("email"));
    setPhoneNumber(localStorage.getItem("phonenumber"));
  }, []);
  const UpdatetheData = (e) => {
    e.preventDefault();
    axios.put(`https://63fcd2fe859df29986c58cbe.mockapi.io/Crud/${id}`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phonenumber: phonenumber,
      })
      .then((res) => {
        alert("Data updated successfully");
        navigate('/read');

    })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <div className="container">
        <form onSubmit={UpdatetheData}>
          <label>ID</label>
          <input
            type="text"
            value={id}
            disabled
            readOnly
            className="form-control w-50"
            onChange={(e) => setId(e.target.value)}
          />

          <label>fName</label>
          <input
            type="text"
            className="form-control w-50"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>lName</label>

          <input
            type="text"
            className="form-control w-50"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>email</label>

          <input
            type="email"
            className="form-control w-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>phone</label>

          <input
            type="number"
            className="form-control w-50"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button className="btn btn-success my-2" type="update">
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default Update;
