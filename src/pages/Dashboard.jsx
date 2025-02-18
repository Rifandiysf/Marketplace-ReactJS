import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../redux/userSlice"
import { fecthProductType, storeProductType } from "../redux/productTypeSlice"
import { useForm } from "react-hook-form"


const Dashboard = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const user = useSelector(root => root?.user)
    const productType = useSelector(root => root?.productType)
    const [loading, setLoading] = useState(true)
    const [showModalAddProductType , setShowModalAddProductType] = useState(false)

    useEffect(() => {
        let token = localStorage.getItem("token")
        dispatch(getProfile(token))
        dispatch(fecthProductType())
    }, [dispatch])

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (user?.err?.status == 401) {
                window.location.href = '/login'
            }
            setLoading(false)
        }, 2000)
        return () => clearTimeout(timeout)
    }, [user])

    const submitProductType = (value) => dispatch(storeProductType(value))

    if (loading) return <h1>Loading...</h1>
  return (
    <div className="container p-4">
        <div className="panel">
            <div className="panel-header py-5">
                <h2>Dashboard</h2>
            </div>
            <div className="panel-header">
                <h5>Product Types</h5>
                <button className="btn btn-outline-success" onClick={() => setShowModalAddProductType(!showModalAddProductType)}>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            <div className="panel-body">
                <div className="table table-responsive">
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            productType?.data?.map((product, id) => <tr key={id}>
                                <th>{id + 1}</th>
                                <th>{product?.type_name}</th>
                                <th>
                                    <button type="button" className="btn btn-outline-warning">
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <br />
                                    <button type="button" className="btn btn-outline-danger">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </th>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className={`modal fade ${showModalAddProductType ? "show" : ""}`} style={{display : showModalAddProductType ? "block" : "none"}}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModalAddProductType(!showModalAddProductType)}></button>
                </div>
                <form onSubmit={handleSubmit(submitProductType)}>
                    <div className="modal-body">
                        <input type="text" className="form-control bg-black" placeholder="Product Type" {...register("type_name")}/>
                        {productType?.error && <span className="text-danger">
                            {productType?.error?.data?.message}
                        </span>}
                    </div>
                </form>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setShowModalAddProductType(!showModalAddProductType)}>Close</button>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard