import React from "react";
import { Form } from 'react-bootstrap';
import 'react-icons/fa';


const CustomInput = ({text, type, placeholder, name,icon}) => {


    return (
        <Form.Group className="mb-4" controlId="">
            <Form.Label>{icon} {text}</Form.Label>
            <Form.Control type={type} name={name} placeholder={placeholder} required/>
        </Form.Group>
    )
};

export default CustomInput;