
import { Container } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa6";
import {Link} from 'react-router-dom';

function Breadcrumb(props) {

    return (<>
     <Container>
        <div style={{ marginTop: "90px"}}>
            <div className='container my-5'>
                <div className='row'>
                    <div className='d-fluid'>
                        <p style={{ fontWeight: "bold", "color": "#0778e2"}}>{props.value1} <FaAngleRight /> <Link to={props.value4}  style={{ "textDecoration": 'none' ,"color": "#0778e2"}}> {props.value2}</Link> <FaAngleRight />{props.value3} </p>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    </>)
}

export default Breadcrumb;