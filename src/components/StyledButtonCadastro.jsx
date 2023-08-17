import { Button } from "@mui/material";
import { styled } from "styled-components";

const StyledButtonCadastro = styled(Button)`
    && {
        color: white;
        border: 1px outset white;
        background-color: #141e30;
        margin-bottom: 1rem;
        width: 60%;
        position: relative;
        left: 20%;
        right: 80%;
        
        border-radius: 2rem;

        &:hover {
            border: 1px dotted black;
        }
    }
`

export default StyledButtonCadastro;