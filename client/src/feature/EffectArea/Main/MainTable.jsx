import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { EffectList } from "../DataEffect";
export default function MainTable({ path }) {
  const Title = styled.h1`
    font-size: 35px;
  `;
  return (
    <div className="container">
      <div className="text-center pb-3">
        <Title>CSS Amazing Effect</Title>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Tên Hiệu Ứng</td>
            <td>Đường dẫn</td>
          </tr>
        </thead>
        <tbody>
          {EffectList &&
            EffectList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <Link to={`${item.path}`}>Xem hiệu ứng</Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
