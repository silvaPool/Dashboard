import { Card } from "@mui/material";
import { styled } from "styled-components";

const StyledCard = styled(Card)`
&& {
 
  background:  #243B55;
  border-radius: 17px;
  width: 18vw;
  height: 25vh;
  color: white;

  &:hover {
    border: 3px solid #1E90FF;
  }

  @media screen and (max-width: 1180px) {
                width: 25vw;
                height: 20vh;
        }

        @media screen and (max-width: 1024px) {
                width: 25vw;
                height: 25vh;
        }

        @media screen and (max-width: 896px) {
                width: 28vw;
                height: 100vh;
                
        }

        @media screen and (max-width: 844px) {
                width: 25vw;
                height: 25vh;
                
        }

        @media screen and (max-width: 915px) {
                width: 35vw;
                height: 25vh;
                
        }



}`;

export default StyledCard;