import React from "react";
import "./rotating-text.scss";

const RotatingText = () => {
    const str = " CALL ME NOW";
    const phoneNumber = "+91-7028936191";

    const handleDial = () => {
        window.location.href = "tel:" + phoneNumber;
    };

    return (
        <div className="rotating-container" onClick={handleDial}>

            <a 
                href={"tel:+91-7028936191"} 
                className="rotating-link"
            >

                {str.split("").map((char, i) => (
                    <span
                        key={i}
                        style={{
                            transform: `rotate(${i  * (360 / str.length)}deg)`,
                        }}
                    >   
                        {char}
                    </span>
                ))}
            </a>
        </div>
    );
};

export default RotatingText;
