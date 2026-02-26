import { useNavigate } from "react-router-dom";

export default function OrderButton( {variant, text = "Order Now"}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/order');
    };

    return (
        <button className={`general-btn ${variant}`} 
            onClick={handleClick}>{text}</button>
    );
}