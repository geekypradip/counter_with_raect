import { useState } from "react";
import Heading from "./heading";

function Counter(props) {
    const [count, setCount]=useState(props.initial)
    return ( 
        <div>
            
            <Heading title="Counter"/>
               <div>
                    <button onClick={()=>setCount(count+1)}>+</button>
                    <h3>{count}</h3>
                    <button onClick={()=>setCount(count-1)}>-</button>
                </div>
                <h4><button onDoubleClick={()=>setCount(count*2)}>Double tap to multiply by 2</button></h4>
        </div>
        
     );
}

export default Counter;