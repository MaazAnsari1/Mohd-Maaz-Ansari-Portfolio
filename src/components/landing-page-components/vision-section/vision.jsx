import React from "react";
import './vision.scss';

import RotatingText from "../../rotating-text/rotating-text";

const VisionSection = () => {
    return (
        <>
            <section id="visionSection">
                <div className="vision-wrap">
                    <div className="vision-body">
                        <div className="vision-slogan">
                            <h1>Dream it? Let's make it happen together!</h1>

                            <div className="vision-txt-wrap">
                                <p>
                                    Thrilled to embark on innovative journeys, 
                                    from concept to completion! 
                                </p>
                                <p>
                                    Eager to collaborate, 
                                    whether launching fresh ideas or perfecting existing projects!
                                </p>
                            </div>
                        </div>

                        <div className="vision-call-btn">
                            {/* <RotatingText /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default VisionSection;