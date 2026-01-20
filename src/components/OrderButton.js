export default function OrderButton( {variant, text = "Order Now"}) {
    const handleClick = () => {
        //temp
        alert("Feature coming soon. Thank you for your interest in my project! Please feel free to contact me for more information.");
    };

    return (
        <button className={`order-btn ${variant}`} 
            onClick={handleClick} >Order Here</button>
    );
}