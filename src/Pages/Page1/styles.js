import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 50px;
`;

export const Paragraph = styled.p`
  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : `color: blue`};

  font-size: 100px;
`;

export const Button = styled.button`
  width: fit-content;
  height: 100px;
`;

export const VisibleContainer = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;
