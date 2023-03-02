import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const URL = "https://63fcd2fe859df29986c58cbe.mockapi.io/Crud";

  useEffect(() => {
    axios
      .get(URL)
      .then((pavan) => {
        setData(pavan.data);
        console.log(pavan.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  const deleteRecord = (recordid) => {
    if (window.confirm("r u sure u want to delete the data")) {
      axios
        .delete(`https://63fcd2fe859df29986c58cbe.mockapi.io/Crud/${recordid}`)
        .then((res) => {
          alert("deleted successfully");
          window.location.reload();
        });
    }
  };
  //1 DATA
  const editData = (id, fname, lname, email, phone) => {
    localStorage.setItem("id", id);
    localStorage.setItem("firstName", fname);
    localStorage.setItem("lastName", lname);
    localStorage.setItem("email", email);
    localStorage.setItem("phonenumber", phone);
  };
  return (
    <>
      <div className="container">
        <table className="table">
          <tr>
            <th>ID</th>
            <th>FNAME</th>
            <th>LNAME</th>
            <th>EMAIL</th>
            <th>NUMBER</th>
            <th>OPERATIONS</th>
          </tr>
          {data.map((shravani) => {
            return (
              <>
                <tr>
                  <td className="p-lg-3">{shravani.id}</td>
                  <td className="p-lg-3">{shravani.firstName}</td>
                  <td className="p-lg-3">{shravani.lastName}</td>
                  <td className="p-lg-3">{shravani.email}</td>
                  <td className="p-lg-3">{shravani.phonenumber}</td>
                  <td className="p-lg-3">
                    <Link to="/edit">
                      <button
                        className="btn bg-info"
                        onClick={() =>
                          editData(
                            shravani.id,
                            shravani.firstName,
                            shravani.lastName,
                            shravani.email,
                            shravani.phonenumber
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      className="btn bg-danger"
                      style={{ marginLeft: "10px" }}
                      onClick={() => deleteRecord(shravani.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Read;

// import React, { useEffect, useState } from "react";

// import axios from "axios";
// import { Link } from "react-router-dom";

// function Read() {
//   const [data, setData] = useState([]);
//   const URL = "https://63fcd2fe859df29986c58cbe.mockapi.io/Crud";

//   useEffect(() => {
//     axios.get(URL).then((anjum) => {
//       console.log(anjum.data);
//       setData(anjum.data);
//     });
//   }, []);
//   const deleteTheRecord=(kalyan)=>{
//     if(window.confirm('R U SURE TO DELETE IT?')){
//     axios.delete(`https://63fcd2fe859df29986c58cbe.mockapi.io/Crud/${kalyan}`)
//     .then((datarecord)=>{
//     alert('deleted succssfully');
//     window.location.reload();// whenever any operation got done we are navigating the location

//   })
// }  // alert('delete the record')
//   }
//   return (<>

//   <div className="container">
//   <Link to="/create">
//   <button className="btn btn-danger">Back</button>
//   </Link>
//     <table className="table">
//         <tr>
//         <th>ID</th>
//         <th>FNAME</th>
//         <th>LNAME</th>
//         <th>EMAIL</th>
//         <th>Phone Number</th>
//         <th>Operations</th>

//         </tr>
//         {data.map((shabana)=>{
//             return (<>
//             <tr>
//                 <td>{shabana.id}</td>
//                 <td>{shabana.firstName}</td>
//                 <td>{shabana.lastName}</td>
//                 <td>{shabana.email}</td>
//                 <td>{shabana.phonenumber}</td>
//                 <td><button className="btn bg-info">Edit</button>
//                 <button className="btn bg-danger" onClick={()=>deleteTheRecord(shabana.id)}>Delete</button></td>
//             </tr>

//             </>)
//         })}
//     </table>

//   </div>

//   </>)
// }

// export default Read;
