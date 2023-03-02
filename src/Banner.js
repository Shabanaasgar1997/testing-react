import React from "react";
import Pavan from './Images/1.jpeg';
import Shravani from './Images/2.jpeg';
import { FaAmilia,FaCanadianMapleLeaf } from "react-icons/fa";

import styled from "styled-components";

export default function Banner() {
const Image=styled.img`
width:250px;
height:250px;
border:5px solid pink;
`


  return (<>
  
  
  <div className="container">

    <h1 className="bg-danger text-white w-25">Hey</h1>
    <Image src={Pavan} alt="Pavan" />
    <Image src={Shravani} alt="" />

    <Image src={require('./Images/3.jpeg')} alt="" />
    <Image src={require('./Images/4.jpeg')} alt="" />
    <FaAmilia /><FaCanadianMapleLeaf />
  </div>
  
  </>)
}
