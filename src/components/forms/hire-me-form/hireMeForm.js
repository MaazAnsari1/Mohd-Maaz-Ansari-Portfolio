import React, { useState } from 'react';
import './hireMeForm.scss';

function HireMeForm({ isModalOpen, handleCloseModal }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNum: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const resetFormData = () => {
        setFormData({
            fullName: '',
            email: '',
            phoneNum: '',
            message: ''
        });

        setErrors({});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.fullName.trim()) {
            formErrors.fullName = 'Full Name is required';
        }

        if (!formData.email.trim()) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email address is invalid';
        }

        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data to submit:', formData);

        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            try {
                const response = await fetch('/server', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    console.log('Form submitted successfully');
                    resetFormData();
                    handleCloseModal();
                } else {
                    console.log('Form submission failed');
                    const errorText = await response.text();
                    console.error('Server error:', errorText);
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        } else {
            console.log('Form validation errors:', formErrors);
            setErrors(formErrors);
        }
    };

    return (
        <>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="close-modal" onClick={handleCloseModal}>X</button>

                        <div className="modal-head">
                            <h1>HIRE ME</h1>
                            <p>Excited to collaborate and create something amazing together.</p>
                        </div>

                        <form action="/server" method="POST" onSubmit={handleSubmit}>
                            <div className="field-wrap">
                                <input
                                    type="text"
                                    className="full-name"
                                    id="full-name"
                                    name="fullName"
                                    placeholder="Full Name"
                                    minLength={12}
                                    maxLength={30}
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                                {errors.fullName && <p className="error">{errors.fullName}</p>}
                            </div>

                            <div className="field-wrap">
                                <input
                                    type="email"
                                    className="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>

                            <div className="field-wrap">
                                <input
                                    type="number"
                                    className="phone-num"
                                    id="phone-num"
                                    name="phoneNum"
                                    placeholder="Phone Number (Optional)"
                                    value={formData.phoneNum}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="field-wrap">
                                <textarea
                                    className="txt-area"
                                    id="txt-area"
                                    name="message"
                                    placeholder="Message (Optional)"
                                    minLength={0}
                                    maxLength={500}
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className="field-wrap">
                                <div className="hire-me-btn-wrap">
                                    <input
                                        type="reset"
                                        className="reset-btn"
                                        id="reset-btn"
                                        onClick={resetFormData}
                                    />
                                    <input
                                        type="submit"
                                        className="submit-btn"
                                        id="submit-btn"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default HireMeForm;
