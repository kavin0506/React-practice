import axios from "axios"
import { useEffect, useState } from "react"

const Axios=()=>{

   const[data,setData]= useState([])
   

    const url="https://official-joke-api.appspot.com/jokes/programming/random"

    useEffect(()=>{
        axios.get(url)
        .then((res)=>setData(res.data))
        

    },[])


    return(
        <>

        <div className="main">
            {
                data.map((value,index)=>{
                    return(
                        <div key={index}>

                            <p>{value.setup}</p>
                            <p>{value.punchline}</p>
                        </div>
                    )
                })
            }


        </div>


        </>
    )
}

export default Axios;