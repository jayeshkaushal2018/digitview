import Card from 'react-bootstrap/Card';

function TextCard(props) {
  return (
    <Card style={{ width: '36rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
        <Card.Text>
        {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
    
  );
}

export default TextCard;