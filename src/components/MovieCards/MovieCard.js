import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MoiveCard.css';
import { useNavigate } from "react-router";
import SeatSelection from '../SeatSelection/SeatSelection';

function MovieCard(props) {
    const navigate = useNavigate();
    const handleClick=()=>{
      props.func(true);
      props.selectMovie(props.title);
    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body className='cardBody'>
        <Card.Title className='cardTitle'>{props.title}</Card.Title>
        <Card.Text className='cardDesc'>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Book Ticket</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;