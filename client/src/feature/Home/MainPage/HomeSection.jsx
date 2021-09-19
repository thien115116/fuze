import React from "react";
import Avatar from "constants/thien2.png";
import ButtonReadMore from "../components/ChildComponent/ButtonReadMore";
export default function HomeSection() {
  return (
    <>
      <div className="home-text">
        <p>Xin chào, Tôi là</p>
        <h2>Trần Ngọc Thiên</h2>
        <h1>Web Developer & Designer</h1>
        <div className="read-more">
          <ButtonReadMore />
        </div>
      </div>
      <div className="home-img">
        <div className="img-box">
          <img src={Avatar} className="" alt="" />
        </div>
      </div>
    </>
  );
}
