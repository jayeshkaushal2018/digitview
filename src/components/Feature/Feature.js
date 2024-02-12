
import { FaAngleRight } from "react-icons/fa6";

function Feature(props) {

    return (<>
        <div className="container my-5">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column align-items-center justify-content-center" >
            <div className="row"><div className="col-lg-2" style={{ "background": "#fff", "paddingTop": "7px", }}>{props.icone}</div>
              <div className="col-lg-10">
                <h2 className="fs-1 mb-5 text-uppercase fw-bold" style={{ "color": "#3c85c9", "paddingTop": "15px" }}>{props.title}</h2>
              </div>
            </div>
            <h4 style={{ "paddingLeft": "100px", "color": "#808080" }}>
            {props.content}
            </h4>
          </div>
          <div className="col-lg-5 d-flex justify-content-center d-none d-lg-flex" >
            <img src={props.image} className="img-fluid w-55" alt="about img" style={{ "border-color": "white" }} />
          </div>
        </div>
      </div>

    </>)
}

export default Feature;