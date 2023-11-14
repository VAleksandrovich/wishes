import { useState } from "react";
import './App.css';

function Carusel ({images}) {
 const [index, setIndex] = useState(0);

 const previousPhoto = () => {
    setIndex ((index => {
        index --;
        if (index < 0) {
            return images.length - 1;
        }
        return index;
    }))
 }
 

 const nextPhoto = () => {
 setIndex ((index => {
    index ++;
    if ( index > images.length - 1) {
        index = 0;
    }
    return index
 }))

 }

 return (
    <div>
<img src={images[index]} width='400px' alt="img"/>

<div className= "btn container">
    <button className="btn" onClick={previousPhoto}>Previous</button>
    <button className="btn" onClick={nextPhoto}>Next</button>
</div>
    </div>
 )
}

export default Carusel;