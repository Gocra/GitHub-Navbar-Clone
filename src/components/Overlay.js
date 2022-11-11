import styled from "styled-components";

const OverlayStyled = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: black;
  background: rgba(0, 0, 0, 0.2);
  z-index: -1;
  backdrop-filter: blur(1px);
  cursor: pointer;
`;

const Overlay = ({ setIsOpen }) => {
  return <OverlayStyled onClick={() => setIsOpen(false)} />;
};

export default Overlay;
