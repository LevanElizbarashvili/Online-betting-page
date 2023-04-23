import React from "react";

export default function Ticketinfo() {
  return (
    <div>
      <h4 className="ticket-container-header">A კატეგორიის საგზურში შედის</h4>
      <div className="ticket-container-edit">
        <div className="ticket ticket-edit">
          <img src="./src/assets/final-item-ticket-icon.png"></img>
          <p>ორმხრივი ავიაბილეთი</p>
        </div>
        <div className="ticket ticket-edit">
          <img src="./src/assets/final-item-hotel-icon.png"></img>
          <p>The Festival in Malta -ს მეინ ივენთის ბაი-ინი</p>
        </div>
        <div className="ticket ticket-edit">
          <img src="./src/assets/final-item-event-icon.png"></img>
          <p>Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი</p>
        </div>
        <div className="ticket ticket-edit">
          <img src="./src/assets/final-item-ticket-icon.png"></img>
          <p>სასტუმრო</p>
        </div>
        <div className="ticket ticket-edit">
          <img src="./src/assets/final-item-ticket-icon.png"></img>
          <p>€500 სახარჯი ფული</p>
        </div>
      </div>
    </div>
  );
}
