import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import { loginSubmit } from "../redux/userSlice"



const Login = () => {
    const {register, handleSubmit} = useForm()
    const dispacth = useDispatch()
    const onSubmit = (value) => dispacth(loginSubmit(value))
    const loginState = useSelector(root => root.user)

        useEffect(() => {
            if(loginState?.message !== "") {
                Swal.fire({
                    position: "bottom-end",
                    icon: loginState?.message === "Wrong Password!" ? "error" : "success",
                    title: `${loginState?.message}`,
                    showConfirmButton: false,
                    timer: 1300
                }).then(() => {
                    if(loginState?.message !== "Wrong Password") {
                        window.location.href = "/dashboard"
                    }
                });
            }
        }, [loginState])

  return (
    <div className='container bg-black text-white my-5 p-5'>
        <h1 className="mb-5">Login</h1>
        <span className="text-danger">
            {
                loginState?.err?.message
            }
        </span>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" {...register("email")}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" {...register("password")}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login