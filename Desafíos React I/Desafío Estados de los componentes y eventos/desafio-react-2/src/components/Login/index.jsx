import React, { useState } from "react";
import { Form, Button, } from "react-bootstrap";


function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formValid, setFormValid] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value.trim());
        setFormValid(email.trim() !== "" && password.trim() !== "");
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value.trim());
        setFormValid(email.trim() !== "" && password.trim() !== "");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === "aprendi@harto.com" && password === "necesitopracticar") {
            props.onSuccess();
        } else {
            props.onError();
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </Form.Group>

            <br></br>

            <Button variant="secondary" type="submit" disabled={!formValid}>
                Ingresar
            </Button>
        </Form>
    );
}

export default Login;