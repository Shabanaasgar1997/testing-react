import React from "react";

function PrintingData({ Shravani }) {
  return (
    <>
      <div className="card mb-lg-2" style={{ width: "15rem" }}>
        <img
          src={Shravani.image}
          className="card-img-top img-fluid"
          style={{ width: "250px", height: "250px", objectFit: "contain" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{Shravani.name}</h5>
          <p className="card-text">{Shravani.email}</p>
          <a className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  );
}

export default PrintingData;
