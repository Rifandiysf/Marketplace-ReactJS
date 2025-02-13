import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { registerSubmit } from "../redux/userSlice"
import { useEffect } from "react"
import Swal from "sweetalert2"


const Register = () => {
    const {register, handleSubmit} = useForm()
    const dispacth = useDispatch()
    const onSubmit = (value) => dispacth(registerSubmit(value))
    const registerState = useSelector((data) => data?.user)

    useEffect(() => {
        if(registerState?.message !== "") {
            Swal.fire({
                position: "bottom-end",
                icon: "success",
                title: `${registerState?.message}`,
                showConfirmButton: false,
                timer: 1300
            }).then(() => window.location.href = "/login");
        }
    }, [registerState])

  return (
    <div className='container bg-black text-white Rounded my-5 p-5'>
    <h1 className="mb-5">Register</h1>
    <span className="text-danger">
        {
            registerState?.err?.message
        }
    </span>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" {...register("name")}/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" {...register("email")}/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control"  {...register("password")}/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password Confirmation</label>
            <input type="password" className="form-control" {...register("password_confirmation")}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default Register