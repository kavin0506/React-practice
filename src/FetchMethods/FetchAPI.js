import { useEffect, useState } from "react";
import { date } from "yup";

const Fetch=()=>{

   const link="https://official-joke-api.appspot.com/jokes/programming/random";

   const[joke,setJoke]=useState([]);


   useEffect(()=>{

    fetch(link)
    .then((res)=>res.json())
    .then((val)=>setJoke(val))

   },[])


  

    return(
        <>

        {
            joke.map((value,index)=>{
                return(
                    <div key={index}>
                        <p>{value.setup}</p>
                        <p>{value.punchline}</p>
                    </div>
                )
            })
        }



        </>
    )
}


export default Fetch;


