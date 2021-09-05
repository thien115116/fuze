import { Wrap } from "components/GlobalComponent";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CircleTextAnimation() {
  const [text, setText] = useState(null);
  useEffect(() => {
    setText(document.querySelector(".text"));
  }, []);
  if (text) {
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
    const element = document.querySelectorAll("span");
    for (let index = 0; index < element.length; index++) {
      element[index].style.transform = `rotate(${index * 23}deg)`;
    }
    document.addEventListener("mousemove", (e) => {
      text.style.left = e.pageX + "px";
      text.style.top = e.pageY + "px";
    });
  }

  return (
    <Wrap style={{ position: "relative" }}>
      <div style={{ top: 0, left: 0, position: "absolute", padding: 20 }}>
        <Link style={{ color: "white", fontSize: 30 }} to="/effect">
          Back
        </Link>
      </div>
      <h2 className="text">Trần - Ngọc - Thiên -</h2>
    </Wrap>
  );
}
