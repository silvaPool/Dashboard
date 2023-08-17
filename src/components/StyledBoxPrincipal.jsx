import { Box } from "@mui/material";
import { styled } from "styled-components";

const StyledBoxPrincipal = styled(Box)`
    && {
        border: 2px solid;
        animation: changeBorder 5s infinite;
        height: 70vh;
        font-size: 1.5rem;
        text-align: center;
        padding: 2rem;


        @keyframes changeBorder {
        0% {
    border-color: blue;
  }
  33% {
    border-color: #3d72b4;
  }
  66% {
    border-color: blue;
  }
  100% {
    border-color: #3d72b4;
  }
    }


    }

   
`

export default StyledBoxPrincipal;