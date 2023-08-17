import { CardContent, Grid, Typography } from "@mui/material";
import StyledCard from "./StyledCard";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function CardDisco({ item }) {




    return (
        <>
            <StyledCard>
                <CardContent>
                    <Typography gutterBottom variant="h5" sx={{ borderBottom: '1px solid white', color: 'white' }}>
                        {item.title}

                    </Typography>
                    {/* <Typography variant="body1">
                    {!item.group && 0}
                    {item?.group?.length}{" "}
                    {item?.group?.length > 1 ? "discos" : "disco"}
                </Typography> */}

                    <Typography>
                        {item.rep} discos por {item.quant}
                    </Typography>

                </CardContent>

            </StyledCard>

        </>
    )
}

export default CardDisco;