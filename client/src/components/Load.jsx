import React from "react";
import { Wrap } from "components/GlobalComponent";
import styled from "styled-components";
export default function Load() {
  const SpanLoad = styled.span`
    width: 5px;
    height: 10px;
    background-color: black;
  `;
  return (
    <Wrap style={{ background: "white" }}>
      <div className="loading">
        <SpanLoad className="load" style={{ "--i": 1 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 2 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 3 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 4 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 5 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 6 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 7 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 8 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 9 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 10 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 11 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 12 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 13 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 14 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 15 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 16 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 17 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 18 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 19 }}></SpanLoad>
        <SpanLoad className="load" style={{ "--i": 20 }}></SpanLoad>
        <div className="loading-text">Loading</div>
      </div>
    </Wrap>
  );
}
