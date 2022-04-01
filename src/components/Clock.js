import React, { useEffect, useState } from "react";
import {StyledClock} from "./StyledClock";

export default function Clock() {
  const [date, setDate] = useState(new Date());
  function tick() {
    setDate(new Date());
  }
  useEffect(() => {
    const ticking = setInterval(tick, 1000);
    return function cleanInterval() {
      clearInterval(ticking);
    };
  });
  return <StyledClock>{date.toLocaleTimeString()}</StyledClock>;
}
