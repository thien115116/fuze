import React from "react";

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-between">
          <div className="logo">
            <a href="/">t</a>
          </div>
          <div className="circle-btn outer-shadow hover-in-shadow">
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
