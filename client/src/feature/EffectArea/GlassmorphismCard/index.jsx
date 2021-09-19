import { Wrap } from "components/GlobalComponent";
import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <Wrap className="effect_5">
      <div style={{ top: 0, left: 0, position: "absolute", padding: 20 }}>
        <Link style={{ color: "white", fontSize: 30 }} to="/effect">
          Back
        </Link>
      </div>
      <div className="box1">
        <span></span>
        <div className="content">
          <h2>Card One</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            mollitia? Doloremque maxime quibusdam fugit adipisci quis.
            Repudiandae amet dolore a iusto debitis autem ea exercitationem
            totam sequi placeat? Amet, ab.
          </p>
          <a href="/#">Read More</a>
        </div>
      </div>
      <div className="box1">
        <span></span>
        <div className="content">
          <h2>Card Two</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            mollitia? Doloremque maxime quibusdam fugit adipisci quis.
            Repudiandae amet dolore a iusto debitis autem ea exercitationem
            totam sequi placeat? Amet, ab.
          </p>
          <a href="/#">Read More</a>
        </div>
      </div>
      <div className="box1">
        <span></span>
        <div className="content">
          <h2>Card Three</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            mollitia? Doloremque maxime quibusdam fugit adipisci quis.
            Repudiandae amet dolore a iusto debitis autem ea exercitationem
            totam sequi placeat? Amet, ab.
          </p>
          <a href="/#">Read More</a>
        </div>
      </div>
    </Wrap>
  );
}
