import React from "react";

function ContactCard(props) {
  return (
    <div className="contactcard">
      <img src={props.contact.imgUrl}></img>
      <h3>Name : {props.contact.name}</h3>
      <p>Phone : {props.contact.phNo}</p>
    </div>
  );
}

export default ContactCard;
