import styled, { css } from "styled-components/macro";
import { DateCellStyledProps } from "../types";

const highlight = css`
  background: #08906a;
  color: white;
`;

export const DateCellStyled = styled.div<DateCellStyledProps>`
  ${(props) => (props.highlight ? highlight : null)}
`;
