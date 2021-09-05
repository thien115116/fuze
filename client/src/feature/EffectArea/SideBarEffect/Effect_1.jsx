import React, { useState } from "react";

import * as IoIcons from "react-icons/io";
import { SidebarData } from "./SidebarData/SidebarData";
import { Link } from "react-router-dom";
import { Wrap } from "components/GlobalComponent";
import MouseRing from "components/MouseRing";

//style Component

function Effect1() {
  const [state, setState] = useState(true);

  return (
    <>
      <Wrap>
        <div style={{ top: 0, left: 0, position: "absolute", padding: 20 }}>
          <Link style={{ color: "white", fontSize: 30 }} to="/effect">
            Back
          </Link>
        </div>
        <div id="sidebar" className="box">
          <ul>
            {SidebarData &&
              SidebarData.map((item, index) => {
                return (
                  <li className="sidebar_item" key={index}>
                    {item.icon}{" "}
                    <span
                      className="text-hide"
                      style={{ fontSize: 20, paddingLeft: 15 }}
                    >
                      {item.title}
                    </span>
                  </li>
                );
              })}
          </ul>
          <div
            onClick={() => {
              if (
                document
                  .getElementById("sidebar")
                  .classList.contains("zoom-out")
              ) {
                setState(true);
                document.getElementById("sidebar").classList.add("zoom-in");
                document.getElementById("sidebar").classList.remove("zoom-out");
                setTimeout(() => {
                  for (
                    let index = 0;
                    index < document.getElementsByClassName("text-hide").length;
                    index++
                  ) {
                    document.getElementsByClassName("text-hide")[
                      index
                    ].style.display = "inline-block";
                  }
                }, 450);
              } else if (
                document.getElementById("sidebar").classList.contains("zoom-in")
              ) {
                document.getElementById("sidebar").classList.add("zoom-out");
                document.getElementById("sidebar").classList.remove("zoom-in");
                setState(!state);
                setTimeout(() => {
                  for (
                    let index = 0;
                    index < document.getElementsByClassName("text-hide").length;
                    index++
                  ) {
                    document.getElementsByClassName("text-hide")[
                      index
                    ].style.display = "none";
                  }
                }, 400);
              } else {
                document.getElementById("sidebar").classList.add("zoom-out");
                setState(!state);
                setTimeout(() => {
                  for (
                    let index = 0;
                    index < document.getElementsByClassName("text-hide").length;
                    index++
                  ) {
                    document.getElementsByClassName("text-hide")[
                      index
                    ].style.display = "none";
                  }
                }, 400);
              }
            }}
            className="sidebar_icon-change"
          >
            <IconChange state={state} />
          </div>
        </div>
        <MouseRing />
      </Wrap>
    </>
  );
}
const IconChange = ({ state }) => {
  console.log(state);
  return state ? <IoIcons.IoIosArrowBack /> : <IoIcons.IoIosArrowForward />;
};
export default Effect1;
