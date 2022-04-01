import React, { useEffect, useState } from "react";
import { StyledListItem } from "./StyledStopwatch";
export default function ListItem({children,remove}) {
    const [highlight, setHighlight] = useState(true)
    useEffect(()=> {
        const turnOffHighlight = () => {
            setHighlight(false)
        }
        const timeout = setTimeout(turnOffHighlight,50)
        return () => {
            clearTimeout(timeout);
          };
    },[])
  return <StyledListItem highlighted={highlight} onClick={remove}>{children}<span>&times;</span></StyledListItem>;
}
