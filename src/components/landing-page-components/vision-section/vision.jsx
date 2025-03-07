import React, { useEffect, useState } from "react";
import './vision.scss';
import visionData from "../../../asserts/data/visionData.json";

import RotatingText from "../../rotating-text/rotating-text";

const VisionSection = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(visionData);
    }, []);

    if (!data) return null;

    return (
        <>
            <section id="visionSection">
                <div className="vision-wrap">
                    <div className="vision-body">
                        <div className="vision-slogan">
                            <h1>{data.title}</h1>

                            <div className="vision-txt-wrap">
                                <p>
                                    Excited to innovate and collaborate from concept to completion, 
                                    ready to launch new ideas or refine existing projects! 
                                </p>
                            </div>
                        </div>

                        <div className="vision-call-btn">
                            <RotatingText />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default VisionSection;