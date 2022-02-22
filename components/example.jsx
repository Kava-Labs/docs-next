import React, { useState } from 'react';


export const RenderMe = () => {

    const [count, setCount] = useState(0); 

    return <div>
        <div>
        count: {count} 
        </div>
       
        <button onClick={()=> setCount(count++)}>
            Add
        </button>
    
    </div>
}; 