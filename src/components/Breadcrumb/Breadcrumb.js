
import { FaAngleRight } from "react-icons/fa6";

function Breadcrumb(props) {

    return (<>
        <div style={{ marginTop: "90px",marginLeft:"-100px" }}>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <p style={{ fontWeight: "bold", }}>{props.value1} <FaAngleRight /> {props.value2} <FaAngleRight /></p><p style={{ "color": "#0778e2", "fontWeight": "bold" }}> {props.value3} </p>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default Breadcrumb;