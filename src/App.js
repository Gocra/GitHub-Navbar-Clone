import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";

const AppStyled = styled.div`
  background-color: #0d1117;
`;

function App() {
  return (
    <AppStyled>
      <Navbar />
    </AppStyled>
  );
}

export default App;
