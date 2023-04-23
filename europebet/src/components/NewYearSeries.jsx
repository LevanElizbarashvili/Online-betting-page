import React from "react";
import Leaderboard from "./Leaderboard";
import TicketList from "./Ticketlist";
import TournamentCard from "./TournamentCard";

export default function NewyearSeries() {
  return (
    <div>
      <div className="event">
        <div className="event-top">
          <h4 className="event-headline">ტურნირები და სატელიტები</h4>
          <h4>სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:</h4>
          <p>19:00 / 19:30 / 20:00</p>
          <div className="event-img-container">
            <img
              className="event-img-left"
              src="./src/assets/promo-left-img.png"
            ></img>
            <img
              className="event-img-right"
              src="./src/assets/promo-right-img.png"
            ></img>
          </div>
        </div>
        <div className="event-footer">
          <p>* ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.</p>
          <p>ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში</p>
          <button>პოკერის ლობი</button>
        </div>
      </div>
      <div className="main-body">
        <h4>მოხვდი TOP22 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით</h4>
        <h5 className="lead-back">
          ქულების დაგროვების მექანიკა
          <img src="./src/assets/mechanic-icon.png"></img>
        </h5>

        <div className="main-body-info">
          <p>ადგილი</p>
          <p>ვაუჩერი</p>
          <p>პრიზი</p>
        </div>
        <div className="leaderboard-container">
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
        </div>
        <TicketList />
        <p className="anotation">
          * ლიდერბორდის შედეგები განახლდება <a>პოკერის ლობიში</a>
        </p>
        <p className="leaderboard-info">
          * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
          სატელიტები
        </p>
      </div>
      <div className="tournaments">
        <h4>ყოველდღიური ტურნირები და სატელიტები</h4>
        <TournamentCard />
        <TournamentCard />
        <div className="tournament-card">
          <div className="tournament-card-text diff-img">
            <p className="text-1">Omaha Highrollers</p>
            <p className="text-2">ბაი-ინი XXX₾</p>
            <p className="text-3">40 000₾</p>
            <p className="text-4-edit">27 დეკემბერი</p>
          </div>
        </div>
        <p className="tournaments-info">
          * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე,
          The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს
          საგზურის მისაღებად.
        </p>
      </div>
      <div className="additional-anotation">
        <h4>
          დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 Side
          ლიდერბორდი
        </h4>
        <p className="tournaments-note">
          * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის
          ლობიში.
        </p>
      </div>
    </div>
  );
}
