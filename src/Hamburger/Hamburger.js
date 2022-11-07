import styled from "styled-components";

const HamburgerIconContainer = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HamburgerIconLine = styled.div`
  width: 22px;
  height: 2px;
  background-color: #fff;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 6px;
`;

const Hamburger = () => {
  return (
    <HamburgerIconContainer>
      <div>
        <HamburgerIconLine />
        <HamburgerIconLine />
        <HamburgerIconLine />
      </div>
    </HamburgerIconContainer>
  );
};

export default Hamburger;
