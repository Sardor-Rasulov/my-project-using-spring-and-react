import React from 'react';
import { Form } from "react-bootstrap-v5"

export function Input({ onChange, placeholder, required, type }){
    const handleChange = React.useCallback((e) => onChange(e.target.value), [onChange]);

    return (
        <Form.Control onChange={handleChange} type={type} placeholder={placeholder} required={required}/>
    );
}