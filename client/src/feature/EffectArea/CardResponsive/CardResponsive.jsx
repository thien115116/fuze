import { Wrap } from "components/GlobalComponent";
import MouseRing from "components/MouseRing";
import React from "react";
import { Link } from "react-router-dom";
import avatar from "./thien.png";
import avatar2 from "./thien2.png";
export default function CardResponsive() {
  return (
    <Wrap className="wrap">
      <div style={{ top: 0, left: 0, position: "absolute", padding: 20 }}>
        <Link style={{ color: "white", fontSize: 30 }} to="/effect">
          Back
        </Link>
      </div>
      <div className=" res card">
        <div className="content">
          <h2>Tôi Là Ai ? </h2>

          <ul>
            <li style={{ paddingBottom: 10 }}>Họ và Tên : Trần Ngọc Thiên</li>
            <li style={{ paddingBottom: 10 }}>Năm Sinh : 1999</li>
            <li style={{ paddingBottom: 10 }}>Quê Quán : Kiên Giang</li>
            <li>Trình Độ Học Vấn : Đại Học</li>
          </ul>

          <a href="/#">Read More</a>
        </div>
        <img src={avatar} alt="Anh" />
      </div>
      <div className=" res card">
        <div className="content">
          <h2>Tôi Làm Gì ?</h2>
          <p style={{ padding: "10px 0" }}>Lập trình viên Fullstack</p>
          <a href="/#">Read More</a>
        </div>
        <img src={avatar2} alt="Anh" />
      </div>
      <MouseRing />
    </Wrap>
  );
}
