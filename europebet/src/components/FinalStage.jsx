import React from "react";
import Ticketinfo from "./TicketInfo";

export default function FinalStage() {
  return (
    <div>
      <div className="finalstage-1">
        <div className="finalstage-banner"></div>
        <p className="finalstage-banner-info">
          გაემგზავრე The Festival in Malta-ზე!
        </p>
        <p className="finalstage-banner-info-2">
          The Festival Series ტურნირების ფარგლებში, ევროპაბეთი უკვე მეორედ
          აძლევს პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
        </p>
        <p className="finalstage-banner-info-3">
          15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
        </p>
        <Ticketinfo />
        <Ticketinfo />
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
        </div>
      </div>
    </div>
  );
}
