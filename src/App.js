import { useState } from "react";
import styled from "styled-components";
import Clock from "./components/Clock";
import Stopwatch from "./components/Stopwatch";

const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
`;
const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0 30px;
  padding:0 0 20px;
  border-bottom:1px solid black;
`;
const StyledButton = styled.button`
  padding: 10px 20px;
  background: white;
  border: 1px solid black;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #b0b0b0;
  }
`;
function App() {
  const [showClock, setShowClock] = useState(true);
  const [showStopwatch, setShowStopwatch] = useState(false);

  function toggleClock() {
    setShowClock((prevState) => !prevState);
    setShowStopwatch(false);
  }
  function toggleStopwatch() {
    setShowStopwatch((prevState) => !prevState);
    setShowClock(false);
  }

  return (
    <StyledRoot className="App">
      <StyledButtonWrapper>
        <StyledButton type="button" onClick={toggleClock} disabled={showClock}>
          Clock
        </StyledButton>
        <StyledButton
          type="button"
          onClick={toggleStopwatch}
          disabled={showStopwatch}
        >
          Stopwatch
        </StyledButton>
      </StyledButtonWrapper>

      {showClock && <Clock />}
      {showStopwatch && <Stopwatch />}
    </StyledRoot>
  );
}

export default App;
