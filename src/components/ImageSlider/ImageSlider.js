import SimpleImageSlider from "react-simple-image-slider";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ImageSlider(props) {

    return (<>
     <Container>
      <Row>
        <Col><div style={{ }}>
            <SimpleImageSlider
                width={props.width}
                height={props.height}
                images={props.images}
                showBullets={props.showBullets}
                showNavs={props.showNavs}
            />
        </div></Col>
      </Row>
    </Container>
        
    </>)
}

export default ImageSlider;