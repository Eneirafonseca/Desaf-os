import { Alert } from "react-bootstrap";

function CustomAlert(props) {
    return (
        <Alert variant={props.variant} onClose={props.onClose} dismissible>
            <Alert.Heading>{props.title}</Alert.Heading>
            <p>{props.message}</p>
        </Alert>
    );
}

export default CustomAlert;
