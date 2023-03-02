import React from "react";
import { Link } from "react-router-dom";

function CrudApplication() {
  return(<>
    <div className="container mx-auto">
    <Link to="/create" >

  <button className="btn btn-success">CreateNew</button>
  </Link>
  </div>
  </>)
}

export default CrudApplication;
