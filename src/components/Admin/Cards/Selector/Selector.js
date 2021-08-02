import React from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, Button
} from 'reactstrap';
import { useHistory } from "react-router-dom";

const Selector = (props) => {
    let history = useHistory();
    const onHandleClick = () => {
        history.push(props.redirect);
    }
    return (
        <div>
            <Card>
                <CardImg top width="100%" height="200px" src={props.imgLink} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5" className="text-center">{props.cardTitle}</CardTitle>
                    <Button className="d-flex m-auto btn-danger" onClick={onHandleClick}>Continue</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Selector
