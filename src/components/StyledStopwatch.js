import styled from "styled-components";

export const StyledStopwatch = styled.div`
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  font-size: 20px;
`;
export const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  font-size: 20px;
`;
export const StyledButton = styled.button`
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
export const StyledTime = styled.div`
  margin: 20px 0 0;
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  font-size: 20px;
`;
export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  font-size: 20px;
`;
export const StyledListItem = styled.li`
  padding: 10px;
  transition:all 0.3s;
  background: ${({highlighted}) => highlighted ? "red" : "white"}
`;
