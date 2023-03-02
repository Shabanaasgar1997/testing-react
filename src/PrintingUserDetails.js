import React from "react";
import Pavan from "./Users.json";

import PrintingData from './PrintingData'

export default function PrintingUserDetails() {
  return (
    <>
      <div className="container">
        <h1 className="display-1">hey this is user details page</h1>
      </div>

      <div className=" row mx-auto gx-5">
        {Pavan.map((Users) => {
          return (
            <>

                <div className="col-lg-3">
                <PrintingData Shravani={Users}/>

                </div>
              {/* <div class="card" style={{ width: "15rem" }}>
                <img
                  src={Users.image}
                  class="card-img-top img-fluid w-25"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{Users.name}</h5>
                  <p class="card-text">{Users.email}</p>
                  <a class="btn btn-primary">Go somewhere</a>
                </div>
              </div> */}
            </>
          );
        })}
      </div>
    </>
  );
}
