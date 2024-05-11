import React from "react";
import { FC } from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  height: 85px;
  background-color: #e9e7e7;
  color: red;
`;

export interface IUniversity {
  name: string;
  country: string;
}

const CardUniversity: FC<{ data: IUniversity }> = ({ data }) => {
  return (
    <CardStyled>
      <p>{data.name}</p>
      <span>{data.country}</span>
    </CardStyled>
  );
};

export default CardUniversity;
