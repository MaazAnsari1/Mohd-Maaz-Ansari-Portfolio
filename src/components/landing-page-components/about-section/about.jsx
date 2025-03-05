import React, { useState } from 'react';
import './about.scss';
import HireMeForm from '../../forms/hire-me-form/hireMeForm';
import aboutData from '../../../asserts/data/aboutData.json';
import Resume from '../../../asserts/doc/Maaz-Ansari-CV.pdf'

function AboutSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section id="visit-about-section">
                <div className="about-section">
                    <div className="about-wrap">
                        <div className="about-txt-contain">
                            <div className="about-head">
                                <span></span>
                                <div className="head">
                                    <h1>{aboutData.head.title}</h1>
                                </div>
                            </div>
                            <div className="about-txt">
                                { aboutData.aboutText.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            <div className="about-btn">
                                <a href={Resume} rel="noopener noreferrer" target="_blank">
                                    <button type="button" className="download-cv-btn">{aboutData.buttons.downloadResume}</button>
                                </a>
                                <button type="button" className="hire-me-btn" onClick={handleOpenModal}>{aboutData.buttons.hireMe}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HireMeForm isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
        </>
    );
}

export default AboutSection;
