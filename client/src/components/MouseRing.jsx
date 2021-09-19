import React, { useEffect, useState } from "react";

export default function MouseRing() {
  const [text, setText] = useState(null);
  useEffect(() => {
    setText(document.querySelector(".text"));
  }, []);
  if (text) {
    text.innerHTML = text.textContent.replace(
      /\S/g,
      "<span class='circle_span'>$&</span>"
    );
    const element = document.querySelectorAll(".circle_span");
    for (let index = 0; index < element.length; index++) {
      element[index].style.transform = `rotate(${index * 23}deg)`;
    }
    document.addEventListener("mousemove", (e) => {
      text.style.left = e.pageX + "px";
      text.style.top = e.pageY + "px";
    });
  }

  return (
    <>
      <h2 className="text" style={{ color: "#fff" }}>
        Trần - Ngọc - Thiên -
      </h2>
    </>
  );
}
