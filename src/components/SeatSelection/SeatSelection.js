import React, { useState } from 'react';
import Recipt from '../Reciept/Recipt';
import './SeatSelection.css';

function SeatSelection(props) {
//   const container = document.querySelector('.container');
// const seats = document.querySelectorAll('.cinema-seats row- .seat:not(.occupied)');
// const count = document.getElementById('count');
// const total = document.getElementById('total');
// const movieSelect = document.getElementById('movie');

// let ticketPrice = +movieSelect.value;

//Update total and count
// function updateSelectedCount() {
//   const selectedSeats = document.querySelectorAll('.cinema-seats row- .seat.selected');
//   const selectedSeatsCount = selectedSeats.length;
//   count.innerText = selectedSeatsCount;
//   total.innerText = selectedSeatsCount * ticketPrice;
// }
const [numOfSeats, setNumOfSeats] = useState(0);
const [proceed, setProceed] = useState(false);


const handleSeatClick=(e)=>{
  if (e.target.classList.contains('seat') ) {
    e.target.classList.toggle('selected');
    console.log(e.target);
  }
  if (e.target.classList.contains('selected') && e.target.classList.contains('seat')  ){
    setNumOfSeats(numOfSeats+1);
  }
  else if(!e.target.classList.contains('selected') && e.target.classList.contains('seat')  ){
    setNumOfSeats(numOfSeats-1);
  }
}

const handleProceed=(e)=>{
  setProceed(true);
}
  return (
    <div className="ieoi">
      {
        !proceed && 
        <>
        <div class="movie-container" >
    {/* <label>Pick a movie: </label>
    <select id="movie" >
      <option value="250">{props.movieTitle} (Rs. 250)</option> */}
      {/* <option value="200">Kabir Singh (Rs. 200)</option>
      <option value="150">Duniyadari (Rs. 150)</option>
      <option value="100">Natsamrat (Rs. 100)</option> */}
    {/* </select> */}
    
    <div className="movieTitle">{props.movieTitle} (₹ 250)</div>
    {/* <ul class="showcase">
      <li>
        <div class="seat refSeat"></div>
        <small>N/A</small>
      </li>
      <li>
        <div class="seat refSelected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div class="seat refOccupied"></div>
        <small>Occupied</small>
      </li>    
    </ul> */}
    
    <div class="container" onClick={handleSeatClick}>
      <div class="screen"></div>
      
      <div className="theatre">
      <div class="cinema-seats left">
    <div class="cinema-row row-1">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-2">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-3">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-4">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-5">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-6">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-7">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>
  </div>


  <div class="cinema-seats right">
    <div class="cinema-row row-1">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-2">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-3">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-4">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-5">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-6">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-7">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>
  </div>
      </div>
      <p class="text">
        You have selected <span id="count">{numOfSeats}</span> seats for the total price of Rs. <span id="total">{250*numOfSeats}</span>
      </p>
      {
        numOfSeats ? <button type="button" class="btn btn-primary btn-lg btn-block" onClick={handleProceed}>Proceed to pay</button>: <></>
        
      }
    </div>
    
  </div>
        </>
      }
      {
        proceed && 
        <>
          <Recipt movieName={props.movieTitle} seats={numOfSeats}/>
        </>
      }
    </div>
    
  )
}

export default SeatSelection;