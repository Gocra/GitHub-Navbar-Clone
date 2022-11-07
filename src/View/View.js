import styled from "styled-components";

export const MobileView = styled.div`
  display: none;
  @media (max-width: 1012px) {
    display: initial;
  }
`;

export const DesktopView = styled.div`
  display: initial;
  @media (max-width: 1012px) {
    display: none;
  }
`;
