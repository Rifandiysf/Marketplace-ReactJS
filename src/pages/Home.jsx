
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardProducts from "../components/CardProducts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../redux/productSlice";
import { getBanner } from "../redux/bannerSlice";

const Home = () => {
    const product = useSelector(root => root.product)
    const banner = useSelector(root => root.banner)
    const dispacth = useDispatch()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    useEffect(() => {
        dispacth(getProduct())
        dispacth(getBanner())
    }, [])
    return (
        <div className="container mt-4">
            <Slider {...settings}>
                {
                    banner?.data?.map((p, idx) => <img src={p.banner_img_url} key={idx}/>)
                }
            </Slider>
            <div className="row mt-5">
                {
                    product?.data?.map((p, idx) => <CardProducts product={p} key={idx} />)
                }
            </div>
        </div>
    )
}

export default Home