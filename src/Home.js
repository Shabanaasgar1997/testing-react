import React from "react";
import Bounce from "react-reveal/Bounce";
import "./Home.css";

function Home() {
  document.title = "Home Page";
  return (
    <>
      <div>
        <Bounce left>
          <h1 className="display-1">Hey this is Home page</h1>
        </Bounce>
      </div>
      <div className="image">

      </div>
    
    </>
  );
}

export default Home;
