import "./login.css"
import {useForm} from "react-hook-form";
const Login=()=>{
    const {register,handleSubmit ,formState:{errors}}=useForm()



    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <h2>Login Page</h2>
                        <form className="form_card" onSubmit={handleSubmit((mes)=>{
                         })}> 
                            <div className="user">
                                    <label htmlFor="username">UserName</label>
                                    <input type="text" id="username" {...register('name',{required:"name is required"})} placeholder="Enter your Name"></input>
                                    {errors.name && <span>{errors.name.message}</span>}
                            </div>
                                <div className="password">
                                    <label htmlFor="pass">Password</label>
                                    <input type="password" id="pass"{...register('paswrd',{required:"Password is required"})} placeholder="Enter password"></input>
                                    {errors.name && <span>{errors.paswrd.message}</span>}
                                </div>
                                    <div className="button">
                                        <button type="submit">Login</button>
                                    </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;