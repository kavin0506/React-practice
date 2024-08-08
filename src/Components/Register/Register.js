import "./register.css"
import {useForm} from "react-hook-form"; 
const Register=()=>{
    const{register,handleSubmit,formState:{errors}}=useForm()
    return(
        <div className="container">
            <div className="regform">
                <h2>Register Form</h2>
                    <form onSubmit={handleSubmit((val)=>{

                     })}> 

                        <div className="fname">
                            <label>Firstname:</label>
                            <input type="text"  {...register('fname',{required:"Firstname is required"})} placeholder="Enter your Firstname"></input>
                            {errors.fname&&<span>{errors.fname.message}</span>}
                        </div>
                            <div className="lname">
                                <label>Lastname:</label>
                                <input type='text'  {...register('lname',{required:"Lastname is required"})} placeholder="Enter your Lastname"></input>
                                {errors.lname&&<p>{errors.lname.message}</p>}
                            </div>
                                <div className="email">
                                    <label>Email:</label>
                                    <input type="email"   {...register('email',{required:"Email is required"})}placeholder="Enter your mail"></input>
                                    {errors.email&&<p>{errors.email.message}</p>}
                                </div>
                                    <div className="pass">
                                        <label>Password:</label>
                                        <input type="password" {...register('password',{required:"Password is required"})} placeholder="Enter your password"></input>
                                        {errors.password&&<p>{errors.password.message}</p>}
                                    </div>
                                         <button type="submit">Signin</button>
                    </form>
            </div>
        </div>
    )
}


export default Register;