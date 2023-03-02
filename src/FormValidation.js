import React,{useState} from "react";

function FormValidation() {

        const [username,setUserName]=useState('');
        const [password,setPassword]=useState('');
        const [error,setError]=useState(false);

        const[uppercase,setUpperCase]=useState('');

        const getPavan=()=>{

            if(username.length===0 && password.length===0)
            {
                setError(true);//this error will be appear only when there is no data in the input fields
            }

        }

        const Changingtouppercase=(e)=>{
            e.preventDefault();
            let shravani=uppercase.toUpperCase();
            setUpperCase(shravani);

        }
    const FormValidate=(e)=>{
            e.preventDefault();
        console.log('hey it is working');
        getPavan();
    }



  return (<>
  
  <div className="container">

    <form className="w-50 mx-auto" onSubmit={FormValidate}>
        <label>UserName</label>
        <input type="text" className="form-control" onChange={(e)=>setUserName(e.target.value)} value={username} />
      {error && username.length<=0 ?  (<p className="text-danger">Username should not be empty</p>):<p>{username}</p>}
        
        <label>Password</label>
        <input type="password" className="form-control" value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        {error&&password.length<=0?<p className="text-danger">Password should not be empty</p>:password}
        <br />

        <button type="submit" className="btn btn-info text-white my-lg-3">Signin</button>
    </form>



  </div>
  

  <form className="w-50 mx-auto">
    <label>Enter Data</label>
    <textarea value={uppercase} onChange={(e)=>setUpperCase(e.target.value)} className="form-control" cols="30" rows="10"></textarea>
  
  <button type="submit" className="btn btn-success my-lg-3" onClick={Changingtouppercase}>Change to Uppercase</button>
  </form>
  </>)
}

export default FormValidation;
