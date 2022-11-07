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
  flex-direction: column;
  justify-content: space-around;
`;

const Line = styled.div`
  width: 22px;
  height: 2px;
  background-color: #fff;
  margin-top: 2px;
  border-radius: 6px;
`;

const Hamburger = () => {
  return (
    <Container>
      <Icon>
        <Line />
        <Line />
        <Line />
      </Icon>
    </Container>
  );
};

export default Hamburger;
