import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Icon = styled.div`
  height: 22px;
  display: flex;
  width: 22px;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const Line = styled.div`
  width: 22px;
  height: 2px;
  background-color: #fff;
  margin-top: 2px;
  border-radius: 6px;
  transition: all 200ms;
`;

const Line1 = styled(Line)`
  ${(props) =>
    props.active ? `transform: rotateZ(-45deg); margin-right:7px;` : ""};
`;

const Line2 = styled(Line)`
  ${(props) => (props.active ? `transform: scale(0);` : "")};
`;

const Line3 = styled(Line)`
  ${(props) =>
    props.active ? `transform: rotateZ(45deg); margin-right:7px;` : ""};
`;

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <Icon>
        <Line1 active={isOpen} style={{ transformOrigin: "top right" }} />
        <Line2 active={isOpen} />
        <Line3 active={isOpen} style={{ transformOrigin: "bottom right" }} />
      </Icon>
    </Container>
  );
};

export default Hamburger;
