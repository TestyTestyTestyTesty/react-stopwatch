import React, { useEffect, useState } from "react";
import numToTime from "../lib/numToTime";
import ListItem from "./ListItem";
import {
  StyledStopwatch,
  StyledButtons,
  StyledButton,
  StyledTime,
  StyledList,
} from "./StyledStopwatch";

export default function Stopwatchtopwatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [markTime, setMarkTime] = useState([]);

  const setStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  const setPaused = () => {
    setIsActive(false);
    setIsPaused(true);
  };
  const setReset = () => {
    setIsActive(false);
    setIsPaused(true);
    setTime(0);
  };
  const setMark = (time) => {
    setMarkTime((oldArray) => [...oldArray, numToTime(time)]);
  };
  const clearMarks = () => {
    setMarkTime([]);
  };
  function tick(time) {
    setTime((time) => time + 1);
  }
  useEffect(() => {
    if (isActive) {
      const ticking = setInterval(tick, 1000);
      return function cleanInterval() {
        clearInterval(ticking);
      };
    }
  }, [isActive]);
  const removeItem = (i) => {
    const filtered = markTime.filter((val, ind) => {
      return ind != i;
    });
    setMarkTime(filtered);
  };
  return (
    <>
      <StyledStopwatch>
        <StyledButtons>
          <StyledButton type="button" disabled={isActive} onClick={setStart}>
            Start
          </StyledButton>
          <StyledButton type="button" disabled={isPaused} onClick={setPaused}>
            Stop
          </StyledButton>
          <StyledButton type="button" onClick={setReset}>
            Reset
          </StyledButton>
          <StyledButton type="button" onClick={() => setMark(time)}>
            Set mark
          </StyledButton>
          <StyledButton type="button" onClick={clearMarks}>
            Reset marks
          </StyledButton>
        </StyledButtons>
      </StyledStopwatch>
      <StyledTime>{numToTime(time)}</StyledTime>
      {markTime && (
        <StyledList>
          {markTime.map((e, i) => {
            return (
              <ListItem key={i} remove={() => removeItem(i)}>
                {e}
              </ListItem>
            );
          })}
        </StyledList>
      )}
    </>
  );
}
