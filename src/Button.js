import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

function Button(){
    const [change,setChange]=useState(0);

    function handleClick(){
        setChange(change+1)
        if(change>=5){
            alert("now your reach")
            setChange(0)

        }
    }
    return(
        <>
            <p>{change}</p>
        <button onClick={handleClick}>
            Click
        </button>
        </>
    )
}

export default Button;