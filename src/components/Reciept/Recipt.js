import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Reciept.css';

function Recipt(props) {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nwcmq96', 'template_sud3423', form.current, '6FEHzFMF1JmriN8ES')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const message="Movie: "+ props.movieName+ " \n Num of seats: "+props.seats + "\n Total Price: ₹"+ 250*props.seats;
  return (
    <div className="receiptContainer">
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      {/* <label>Message</label> */}
      <textarea name="message" value={message} className="toBeHidden" />
      <input type="submit" value="Send" />
    </form>
    </div>
    
  )
}

export default Recipt