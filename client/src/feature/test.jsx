/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import "./style.css";
import HomeSection from "feature/Home/index";
import About from "./About";
import Skill from "./Skill";

const anchors = ["home", "about", "skill"];

export default function FullpageWrapper() {
  return (
    <>
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <HomeSection />
              <About />
              <Skill />
            </>
          );
        }}
      />
      ;
    </>
  );
}
