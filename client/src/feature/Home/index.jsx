import React from "react";
import { Wrapper } from "components/GlobalComponent";
import Avatar from "constants/081.png";
import Avatar2 from "constants/09.png";
import * as AiIcons from "react-icons/ai";
export default function Home() {
  return (
    <Wrapper>
      <div className="banner">
        <header>
          <a href="/#" className="logo">
            Logo
          </a>
          <ul>
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/effect">Effect</a>
            </li>
            <li>
              <a href="/voice">Voice Control</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
          </ul>
        </header>
        <div className="content">
          <h2 className="title">Web Designer & Developer</h2>
          <p>
            Tên của mình là Trần Ngọc Thiên. Mình đang cần tìm một vị trí lập
            trình Front-end.
          </p>
          <a href="/#">Read More</a>
        </div>
        <div className="glass_1">
          <span className="fb">
            <a
              href="https://www.facebook.com/fuzethien/"
              rel="noreferrer"
              target="_blank"
            >
              <AiIcons.AiFillFacebook />
            </a>
          </span>
          <span className="ytb">
            <a href="/#">
              <AiIcons.AiFillYoutube />
            </a>
          </span>
          <span className="insta">
            <a href="/#">
              <AiIcons.AiOutlineInstagram />
            </a>
          </span>
        </div>
        <div className="imgBx">
          <img src={Avatar} alt="abc"></img>
        </div>
        <div className="imgBx1">
          <img src={Avatar2} alt="abc"></img>
        </div>
      </div>
    </Wrapper>
  );
}
