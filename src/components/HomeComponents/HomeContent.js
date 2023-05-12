import React from "react";
import MovieCard from "../MovieCards/MovieCard";
import UpcomingMovie from "../MovieCards/UpcomingMovie";
import "./HomeContent.css";
import ImageSlider from "./ImageSlider";

function HomeContent(props, { phone, email }) {
  const imgUrl = [
    "https://i.ibb.co/1Q2b6m1/black-adam-2021-poster-6173-scaled.jpg",
    "https://i.ibb.co/fS94P5v/black-panther.jpg",
    "https://i.ibb.co/FJXGCRj/oppenhimer.jpg",
    "https://i.ibb.co/wsRGvp1/vikram-Vedha.jpg",
  ];
  const upcomingImg=[
    "https://i.ibb.co/17zhq2p/pathaan.jpg" ,
"https://i.ibb.co/V3VjNdc/ramsetu.jpg" ,
"https://i.ibb.co/wWkjqYG/spiderman.jpg", 
"https://i.ibb.co/0qXZN47/mario.jpg"
  ]
  const upcomingTitle=[
    "Pathaan",
    "Ramsetu",
    "Spider-Man: Across the Spider-Verse",
    "The Super Mario Bros. Movie"
  ]
  const upcomingDesc=[
    "Pathaan is an upcoming 2023 Indian Hindi-language action thriller film written and directed by Siddharth Anand and produced by Aditya Chopra under his banner Yash Raj Films. The film stars Shah Rukh Khan, Deepika Padukone and John Abraham.",
    "An atheist archaeologist turned believer races against time to prove the true existence of the legendary Ram Setu before evil forces destroy the pillar of India's heritage.",
    "Miles Morales embarks on an epic adventure that will transport Brooklyn's full-time, friendly neighbourhood Spider-Man across the Multiverse to join forces with Gwen Stacy and a new team.",
    "A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess."
  ]
  const Title = ["Black Adam", "Black Panther", "Oppnehiemer", "Vikram Vedha"];
  const Description = [
    "Black Adam is a 2022 American superhero film based on the DC Comics character of the same name. Produced by New Line Cinema, DC Films, ...",
    "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt ...",
    "Physicist J Robert Oppenheimer works with a team of scientists during the Manhattan Project, leading to the development of the atomic bomb.",
    "Vikram Vedha is a 2022 Indian Hindi-language neo-noir action thriller film written-directed by Pushkar–Gayathri, based on their 2017 Tamil film of the same ...",
  ];
  const handleClick=(movieName)=>{
    props.isMovieSelected(true);
    props.selectMovie(movieName);
  }
  return (
    <div className="HomeContent">
      {/* <button onClick={handleClick}>click me </button> */}
      <div className="userInfo">
        You are logged in as <span className="highlight">{props.userInfo.email || props.userInfo.phone}</span>
      </div>
      <div className="block">
        <div className="blockTitle">Currently Airing</div>
        <div className="row1">
          <MovieCard
            imgUrl={imgUrl[0]}
            title={Title[0]}
            description={Description[0]}
            func={props.isMovieSelected}
            selectMovie={props.selectMovie}
          />
          <MovieCard
            imgUrl={imgUrl[1]}
            title={Title[1]}
            description={Description[1]}
            func={props.isMovieSelected}
            selectMovie={props.selectMovie}
          />
          <MovieCard
            imgUrl={imgUrl[2]}
            title={Title[2]}
            description={Description[2]}
            func={props.isMovieSelected}
            selectMovie={props.selectMovie}
          />
          <MovieCard
            imgUrl={imgUrl[3]}
            title={Title[3]}
            description={Description[3]}
            func={props.isMovieSelected}
            selectMovie={props.selectMovie}
          />
        </div>
      </div>
      <div className="block">
        <div className="blockTitle">Upcoming</div>
        <div className="row1">
          <UpcomingMovie imgUrl={upcomingImg[0]} title={upcomingTitle[0]} description={upcomingDesc[0]} />
          <UpcomingMovie imgUrl={upcomingImg[1]} title={upcomingTitle[1]} description={upcomingDesc[1]} />
          <UpcomingMovie imgUrl={upcomingImg[2]} title={upcomingTitle[2]} description={upcomingDesc[2]} />
          <UpcomingMovie imgUrl={upcomingImg[3]} title={upcomingTitle[3]} description={upcomingDesc[3]} />
        </div>
      </div>
    </div>
  );
}

export default HomeContent;


{/* <a href="https://ibb.co/KbKRqyQ"><img src="https://i.ibb.co/17zhq2p/pathaan.jpg" alt="pathaan" border="0"></a>
<a href="https://ibb.co/52TM9dg"><img src="https://i.ibb.co/V3VjNdc/ramsetu.jpg" alt="ramsetu" border="0"></a>
<a href="https://ibb.co/YkCwSbn"><img src="https://i.ibb.co/wWkjqYG/spiderman.jpg" alt="spiderman" border="0"></a>
<a href/="https://ibb.co/JBh6JnT"><img src="https://i.ibb.co/znk9vsg/vikram-Vedha.jpg" alt="vikram-Vedha" border="0"></a> */}