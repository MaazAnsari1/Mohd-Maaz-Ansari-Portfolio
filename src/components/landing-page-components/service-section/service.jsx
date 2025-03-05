import React, { useEffect, useState } from "react";
import "./service.scss";
import servicesData from "../../../asserts/data/servicesData.json";

const ServiceSection = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(servicesData);
    }, []);

    if (!data) return null;

    return (
        <section id="serviceSection">
            <div className="service-sec">
                <div className="service-wrap">
                    <div className="service-head">
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                    </div>

                    <div className="service-content">
                        {data.services.map((service, index) => (
                            <div className="service-body" key={index}>
                                <h3>{service.name}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;
