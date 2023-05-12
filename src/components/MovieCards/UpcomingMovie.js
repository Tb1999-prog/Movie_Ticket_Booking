import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MoiveCard.css';

function UpcomingMovie(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgUrl} style={{ height: '10rem' }} />
      <Card.Body className='cardBody'>
        <Card.Title className='cardTitle'>{props.title}</Card.Title>
        <Card.Text className='cardDesc'>
          {props.description}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default UpcomingMovie;