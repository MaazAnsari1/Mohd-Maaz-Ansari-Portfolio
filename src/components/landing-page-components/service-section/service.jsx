import React from "react";
import './service.scss';

import FrontEndDevIcon from "../../../asserts/icons/front-end-icon.png";
import UIUXDesignIcon from "../../../asserts/icons/ui-ux-design-icon.png";
import PhotographyIcon from "../../../asserts/icons/photography-icon.png";
import PhotoEditorIcon from "../../../asserts/icons/photo-editor-icon.png";

const ServiceSection = () => {
    return (
        <>
            <section id="serviceSection">
                <div className="service-sec">
                    <div className="service-wrap">
                        <div className="service-head">
                            <h2>Service</h2>
                            <p>
                                Empowering Digital Experiences, 
                                Enhancing User Interaction Designs that Inspire, 
                                Functionality that Delivers.
                            </p>
                        </div>

                        <div className="service-content">
                            
                            <div className="service-body">
                                {/* <div className="service-icon">
                                    <img src={FrontEndDevIcon} alt="Front End Development" />
                                </div> */}
                                <h3>Front End Development</h3>
                                <p>
                                    Building responsive, 
                                    user-friendly web interfaces with modern technologies. 
                                    Creating interactive and 
                                    engaging user experiences that function flawlessly.
                                </p>
                            </div>

                            <div className="service-body">
                                {/* <div className="service-icon">
                                    <img src={UIUXDesignIcon} alt="UI/UX Design" />
                                </div> */}
                                <h3>UI/UX Design</h3>
                                <p>
                                    Enhancing user satisfaction through intuitive design 
                                    and seamless experiences. 
                                    Creating visually appealing interfaces that engage 
                                    and inspire.
                                </p>
                            </div>

                            <div className="service-body">
                                {/* <div className="service-icon">
                                    <img src={PhotographyIcon} alt="Photography" />
                                </div> */}
                                <h3>PhotoGraphy</h3>
                                <p>
                                    Photography captures life's moments, 
                                    turning them into lasting memories. 
                                    Through the lens, 
                                    we reveal the beauty and 
                                    stories of the world around us.
                                </p>
                            </div>

                            <div className="service-body">
                                {/* <div className="service-icon">
                                    <image src={PhotoEditorIcon} alt="Photo Editor" />
                                </div> */}
                                <h3>Photo Editor</h3>
                                <p>
                                    Photo editors turn ordinary images into stunning masterpieces, 
                                    enhancing colors, retouching details, 
                                    and adding creative effects to reveal unique stories.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServiceSection;