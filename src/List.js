import { useState } from "react";

const List =()=>{

    const [value,setValue]=useState("")
    const [storeValue,setStoreValue]=useState([])


const handleAdd=()=>{

    if(!value)return
    else{
        setStoreValue([...storeValue,value])
        setValue("")

    }
 
    
}

const handleDel=(index)=>{
    const val=storeValue.filter((value,input)=>input!==index)
    setStoreValue(val)
}


    return(
        <>

        <input type="text" placeholder="Enter items" onChange={((e)=>setValue(e.target.value))} value={value}/>
        <button onClick={()=>handleAdd()}>ADD</button>

        {
            storeValue.map((val,index)=>{
                return(

                    <div key={index}>
                        <p>{val} <button onClick={()=>handleDel(index)}>remove</button> </p>
                        

                    </div>
                )
            })
        }
        
        </>
    )
}


export default List;