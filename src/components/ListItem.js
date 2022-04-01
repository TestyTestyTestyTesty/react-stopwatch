import React, { useEffect, useState } from "react";
import { StyledListItem } from "./StyledStopwatch";
export default function ListItem({children}) {
    const [highlight, setHighlight] = useState(true)
    useEffect(()=> {
        const turnOffHighlight = () => {
            setHighlight(false)
        }
        const timeout = setTimeout(turnOffHighlight,3000)
        return () => {
            clearTimeout(timeout);
          };
    },[])
  return <StyledListItem highlighted={highlight}>{children}</StyledListItem>;
}
