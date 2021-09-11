import styled, { css } from "styled-components/macro";

const BaseFont = css`
  font-size: 16px;
`;

export const LabelFont = styled.span`
  ${BaseFont};
  color: #006bb7;
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;
`;
