import React from "react";
import Leaderboard from "./Leaderboard";
import TicketList from "./Ticketlist";

export default function Cashgames() {
  return (
    <div>
      <div className="main-body">
        <h4>1₾ რეიქი = 1 ქულას</h4>
        <h5>
          TOP20 ლიდერბორდი ჰოლდემში
          <img src="./src/assets/example-icon.png"></img>
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
      </div>
      <div className="additional-anotation">
        <h4>
          დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 Side
          ლიდერბორდი
        </h4>
        <p>
          * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის
          ლობიში.
        </p>
      </div>
    </div>
  );
}
