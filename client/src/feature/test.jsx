/* eslint-disable import/no-extraneous-dependencies */
import React, { useMemo, useState } from "react";
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
      <Pagination />
      {/* <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <HomeSection />
              <About />
              <Pagination />
            </>
          );
        }}
      /> */}
      ;
    </>
  );
}
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 53;
  const MAX_ITEMS = 5;
  const MAX_Pagination_Item = [1, 2, 3, 4, 5];
  const MAX_PAGE = useMemo(() => {
    return Math.ceil(totalItems / MAX_ITEMS);
  }, []);
  console.log(MAX_PAGE);
  return (
    <>
      <PaginationItem
        MAX_PAGE={MAX_PAGE}
        currentPage={currentPage}
        MAX_Pagination_Item={MAX_Pagination_Item}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
const PaginationItem = ({ MAX_PAGE, currentPage, MAX_Pagination_Item,setCurrentPage }) => {
  return (
    <>
      {MAX_Pagination_Item.map((item, index) => {
        switch (index) {
          case 0:
            return (
              <>
                <button onClick={setCurrentPage()}>{currentPage}</button>
              </>
            );
          case 1:
            return <>{currentPage + 1}</>;
          case 2:
            return <>...</>;
          case 3:
            return <> d</>;
          default:
            return <> e</>;
        }
      })}
    </>
  );
};
