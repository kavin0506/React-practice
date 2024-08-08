import { useEffect, useState } from "react";

const From=()=>{

   const[storeJoke,setStoreJoke]= useState([])

    const url="https://api.tvmaze.com/shows/1/episodes";

    useEffect(()=>{

        fetch(url)
        .then((res)=>res.json())
        .then((data)=>console.log(data))

        
    },[])



    return(
        <>

        <div className=" form">
            {
                storeJoke.map((val,index)=>{
                    return(
                        <div key={index}> 
                            <p>{val.name}</p>
                            <span>{val.url}</span>


                        </div>
                    )
                })
            }
            

        </div>
        
        </>
    )
}

export default From;