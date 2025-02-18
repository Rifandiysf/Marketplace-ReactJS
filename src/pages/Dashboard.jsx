import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../redux/userSlice"


const Dashboard = () => {
    const dispatch = useDispatch()
    const user = useSelector(root => root?.user?.data)
    const loadRedux = useSelector(root => root?.user?.load)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let token = localStorage.getItem("token")
        dispatch(getProfile(token))
    }, [dispatch])

    useEffect(() => {
        if (loadRedux && loading) return
        if (!loadRedux && !!user) {
            setLoading(false)
        }
        window.location.href = "/login"
    }, [loadRedux, loading ,user])

    if (loading) return <h1>Loading...</h1>
  return (
    <div className="container p-4">
        <div className="card">
            <h1>hallo</h1>
        </div>
    </div>
  )
}

export default Dashboard