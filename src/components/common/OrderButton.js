import { useNavigate } from "react-router-dom";

export default function OrderButton( {variant, text = "Order Now"}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/order');
    };

    return (
        <button className={`order-btn ${variant}`} 
            onClick={handleClick}>{text}</button>
    );
}