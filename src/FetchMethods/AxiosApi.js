import axios from "axios"
import { useEffect, useState } from "react"

const AxiosApi=()=>{

 const series="https://api.tvmaze.com/shows/1/episodes"

const[movie,setMovie]= useState([])

useEffect(()=>{

    axios.get(series)
    .then((res)=>setMovie(res.data))

},[])

    return(
        <>
           {
            movie.map((value,index)=>{
                return(

                    <div key={index}>
                        <p>{value.name}</p>

                    
                    </div>
                )
            })
           }


        </>
    )
}


export default AxiosApi;