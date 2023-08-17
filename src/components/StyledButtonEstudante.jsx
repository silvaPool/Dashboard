import { Button } from "@mui/material";
import { styled } from "styled-components";


const StyledButtonEstudante = styled(Button)`
    && {
        width: 9em;
        height: 3em;
        border-radius: 30em;
        font-size: 15px;
        font-family: inherit;
        border: none;
        position: relative;
        overflow: hidden;
        z-index: 1;
        box-shadow: 2px 2px 12px #c5c5c5,
                    -6px -6px 12px #ffffff;

  &::before {
    content: '';
    width: 0;
    height: 3em;
    border-radius: 30em;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #243B55 0%, #141E30 100%);
    transition: .5s ease;
    display: block;
    z-index: -1;

  }

  &:hover::before {
    width: 9em;
  }


  
}
    
`

export default StyledButtonEstudante;