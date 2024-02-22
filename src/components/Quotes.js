
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
function Quotes(props) {
  return (
    <>
    
      {/* <div class="container" style={{"borderRadius":"20px"}}>
        <div class="row"style={{"backgroundColor":"#e7f0f8" ,"borderRadius":"20px 20px 0  0  ","padding":"30px"}}>
          <div class="col-sm" style={{"backgroundColor":""}}><h5>Quote#:{props.quote}</h5></div>
          <div class="col-sm"  style={{"backgroundColor":"","textAlign":"right"}}><h5>Date: {props.date}</h5></div>
        </div>
        <div class="row" style={{"backgroundColor":"#e7f0f8" ,"padding":"30px", "borderRadius":"0 0 20px  20px " }}>
          <div class="col-sm" style={{"backgroundColor":"" }}><h5>Part #: {props.part}</h5></div>
          <div class="col-sm" style={{"backgroundColor":"","textAlign":"right"}}><h5>Status: {props.status}</h5></div>
        </div>
      </div> */}
      <div class="container" style={{"backgroundColor":'red',"width":'100%'}}>
       <Card style={{ width: '100%' }}>
      <Card.Body>
      
        <div class="row">
          <div class="col-sm"  ><h5>Quote#:{props.quote}</h5></div>
          <div class="col-sm"  ><h5>Date: {props.date}</h5></div>
        </div>
        <div class="row">
          <div class="col-sm" ><h5>Part #: {props.part}</h5></div>
          <div class="col-sm" ><h5>Status: {props.status}</h5></div>
        </div>
      
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default Quotes;
