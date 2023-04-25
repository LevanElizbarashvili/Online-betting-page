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
        <div className="res-finalstage">
          <Ticketinfo />
          <Ticketinfo />
          <div className="res-finalstage-item">
            <h4 className="ticket-container-header">
              A კატეგორიის საგზურში შედის
            </h4>
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
      </div>
      <h4 className="travel-header">მოიგე საგზური 30 აპრილის ტურნირებზე</h4>
      <div className="travel">
        <div className="res-grid-1">
          <div className="travel-info">
            <div>
              <h5>„Holdem Grinders”</h5>
              <p>C კატეგორიის 1 საგზური</p>
            </div>
            <img src="./src/assets/poker-item-1-ticket-icon.png"></img>
          </div>
          <div className="travel-info">
            <div>
              <h5>„“Cashgame Sharks””</h5>
              <p>C კატეგორიის 1 საგზური</p>
            </div>
            <img src="./src/assets/poker-item-1-ticket-icon.png"></img>
          </div>
          <div className="travel-info">
            <div>
              <h5>„Holdem Grinders”</h5>
              <p>C კატეგორიის 1 საგზური</p>
            </div>
            <img src="./src/assets/poker-item-1-ticket-icon.png"></img>
          </div>
        </div>
        <div className="res-grid-2">
          <div className="travel-info">
            <div>
              <h5>„The Festival in Malta, GTD”</h5>
              <p>C კატეგორიის 1 საგზური</p>
              <p>B კატეგორიის 1 საგზური</p>
              <p>
                *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
                ბაი-ინის გადახდით.
              </p>
            </div>
            <img src="./src/assets/poker-item-2-ticket-icon.png"></img>
          </div>
          <div className="travel-info">
            <div>
              <h5>“Cashgame Sharks”</h5>
              <p>C კატეგორიის 1 საგზური</p>
              <p>
                *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
                ბაი-ინის გადახდით.
              </p>
            </div>
            <img src="./src/assets/poker-item-1-ticket-icon.png"></img>
          </div>
        </div>
        <div className="res-grid-3">
          <p className="travel-footer">
            * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the
            Rings ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
          </p>
          <p className="travel-footer">
            *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
            ბაი-ინის გადახდით.
          </p>
        </div>
      </div>
    </div>
  );
}
