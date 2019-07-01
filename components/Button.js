import styled from 'styled-components';
import colors from '../colors';
const { 
  highlightBlue,
  highlightBlueTransparent,
  highlightRed,
  highlightRedTransparent 
} = colors;

const Button = styled.a`
  display: inline-block;
  font-size: 1.25em;
  color: ${highlightBlue};
  border: 1px solid ${highlightBlue};
  background-color: ${highlightBlueTransparent};
  padding: 0.5em;
  margin: 0.75em 0 0.75em 0;

  &:hover, &:active {
    cursor: pointer;
    color: ${highlightRed};
    border: 1px solid ${highlightRed};
    background-color: ${highlightRedTransparent};
  }
`;
  
  export default Button;