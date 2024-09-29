import React, { useState } from "react";


const Task = (props) => {

    const [isHovered, setIsHovered] = useState(false)
    return (
        <div className="d-flex justify-content-between align-items-center border p-2 mb-2 bg-secondary-subtle"
            onMouseEnter={()=> {
                setIsHovered(true);
            }}
            onMouseLeave={()=> {
                setIsHovered(false);
            }} >
 
            <p>{props.task}</p>
            {(isHovered) && <span onClick={()=>{
                props.onRemove()
            }}><i class="fa-regular fa-trash-can"></i></span>}
            
        </div>
    )
}

export default Task;