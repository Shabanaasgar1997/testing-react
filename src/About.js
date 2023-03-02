import React from "react";
import Carousel from './Carousel'


function About({name,designation,salary}) {
  document.title = "About";
  return (
    <>
      <div>Hey this is about page</div>
      <h1> {name} is a dirty fellow</h1>
      <h2>{designation}</h2>
      <h3>{salary}</h3>
      <Carousel name={name} designation={designation} salary={salary}/>
    </>
  );
}

export default About;
