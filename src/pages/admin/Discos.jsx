import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDisco } from "../../services/disco";
import { Grid } from "@mui/material";
import CardsWorkout from "./CardsDisco";

function Discos() {

    const { state } = useLocation();
    const [discoData, setDiscoData] = useState([]);

    console.log(workoutData);

    useEffect(() => {

        async function getDiscosData() {
            try {
                const res = await getDisco(state);
                if (res) {
                    setDiscoData(res);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getDiscosData();
    }, [state]);

    return (
        <>
            <Grid container spacing={2}>
                {discoData && discoData.map((item, index) => (
                    <Fragment key={index}>
                        <Grid item>
                            <CardsWorkout item={item} uid={state} index={index} />
                        </Grid>
                    </Fragment>
                ))}
            </Grid>
        </>
    );
}

export default Discos;