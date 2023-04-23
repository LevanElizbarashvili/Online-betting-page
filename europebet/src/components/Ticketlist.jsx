import React from "react";

export default function TicketList() {
  return (
    <div className="ticket-container">
      <div className="ticket">
        <img src="./src/assets/travel-icon-sm.png"></img>
        <p>The Festival in Malta-ს საგზური</p>
      </div>
      <div className="ticket">
        <img src="./src/assets/ticket-icon-sm.png"></img>
        <p>
          სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The
          Festival in Malta-ს საგზური
        </p>
      </div>
      <div className="ticket">
        <img src="./src/assets/gift-card.png"></img>
        <p>„ალტას“ ვაუჩერი</p>
      </div>
    </div>
  );
}
