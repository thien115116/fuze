import { Wrap } from "components/GlobalComponent";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function GlassmorphismButton() {
  return (
    <Wrap style={{ background: "#350048" }}>
      <div style={{ top: 0, left: 0, position: "absolute", padding: 20 }}>
        <Link style={{ color: "white", fontSize: 30 }} to="/effect">
          Back
        </Link>
      </div>
      <div className="button-e-wrap">
        <div className="btn-e-glass">
          <a href="/#">Read More</a>
        </div>
        <div className="btn-e-glass">
          <a href="/#">Read More</a>
        </div>
        <div className="btn-e-glass">
          <a href="/#">Read More</a>
        </div>
      </div>
    </Wrap>
  );
}
