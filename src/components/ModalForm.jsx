import React, { useState } from "react";

const ModalForm = ({ title, fields, onSubmit }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="modal">
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <div key={field}>
                        <label>{field}</label>
                        <input name={field.toLowerCase()} onChange={handleChange} />
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ModalForm;
