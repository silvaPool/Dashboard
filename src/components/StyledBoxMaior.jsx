import {  Box } from "@mui/material";
import { styled } from "styled-components";

const StyledBoxMaior = styled(Box)`
&& {
    display: flex;
    border: 1px solid blue;
    height: 100vh;

   
    
    @media screen and (max-width: 740px) {
          height: 150vh;
        }
  
  
    @media screen and (max-width: 896px) {
                
        }
  

}`;

export default StyledBoxMaior;