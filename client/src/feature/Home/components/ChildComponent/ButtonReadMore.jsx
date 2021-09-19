import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function ButtonReadMore() {
  return (
    <>
      <Link className="button_readMore" to="/about">
        <span>Read More</span>
        <span>Read More</span>
      </Link>
    </>
  );
}
