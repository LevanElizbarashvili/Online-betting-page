import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="logo-signin-div">
        <div className="orange-dot"></div>
        <button className="signup-btn">Sign up</button>
        <button className="signin-btn">Sign in</button>
      </div>
      <div className="header-img"></div>
      <div>
        <div className="header-info">
          <p className="info-1">სლოტები</p>
          <p className="info-2">10 სექტემბერი - 7 ნოემბერი</p>
        </div>
        <h3 className="info-h">მოიპოვე 10 საგზურიდან ერთ-ერთი</h3>
        <p className="info-3">მოხვდი პოკერის ფესტივალზე ფილიპინებში</p>
      </div>
    </div>
  );
}
