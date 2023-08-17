import { Box, Toolbar } from "@mui/material";
import { styled } from "styled-components";

const StyledBar= styled(Toolbar)`
&& {
        display: flex;
        justify-content: space-between;
        background: #141E30;  
        background: -webkit-linear-gradient(to right, #243B55, #141E30); 
        background: linear-gradient(to left, #243B55, #141E30);
}
      


        
`

export default StyledBar;