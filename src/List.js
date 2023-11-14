import { useState } from "react";
import { data } from './Data';
import Carusel from "./Carusel";

function List() {
    const [wishes, setWishes] = useState(data);
    
    
    const removeItem = (id) => {
    let newWishes = wishes.filter (wishes => wishes.id !== id);
    setWishes(newWishes);
    }
    
      return (
        <div> 
          <div className='container'>
            <h1> My List of {wishes.length}  wishes </h1>
          </div>
    
          {wishes.map ((wish => {
            const {id, wishes, images} = wish;
    
            return (
    
              <div key= {id}>
                <div className='container'>
                 <h2> {id} - { wishes} </h2>
                </div>

                <div className='container'>
               <Carusel images = {images} />
                </div>
               
                <div className='container'>
              <button className='btn-completed' onClick={()=>removeItem(id)}> Completed</button>
                </div>
    
              </div>
            )
          }))}
            <div className='container'>
              <button className='btn-completed-all' onClick={() => setWishes([])}> Completed All</button>
                </div>
    
         
        </div>
      );
    }
    
    export default List;