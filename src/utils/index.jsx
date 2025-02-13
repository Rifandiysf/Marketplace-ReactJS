import axios from "axios"

const formatRupiah = (value) => {
    return `Rp ${new Intl.NumberFormat('id-ID', { minimumFractionDigits: 0 }).format(value)}`
}

const url = import.meta.env.VITE_BASE_URL_API

const fecthApi = () => (axios.create({
    baseURL: `${url}`,
    headers: {
        "Accept": "Application/json"
    }
}))

export {
    formatRupiah,
    fecthApi
}