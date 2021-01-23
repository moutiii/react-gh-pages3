import React, { Component } from "react";
import Img1 from '../src/Photos/img1.jpg'
import Img2 from '../src/Photos/img2.jpg'
import Img3 from '../src/Photos/img3.jpg'
import Img4 from '../src/Photos/img4.jpg'

class Galerie extends Component {
 render() {
 return (
 <div>
 <h2>Some Photos</h2>
 <p>
     <img src={Img1} width="180px" height="150px" id="images" /> 
     <img src={Img2} width="180px" height="150px" id="images" /> 
     <img src={Img3} width="180px" height="150px" id="images" /> 
     <img src={Img4} width="180px" height="150px" id="images" /> 

 </p>
 </div>
 );
 }
}
export default Galerie;