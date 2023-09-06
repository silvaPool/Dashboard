import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDisco } from "../../services/disco";
import { Grid } from "@mui/material";
import CardsDisco from "./CardsDisco";

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
                {discoData && discoData.length > 0 ? (
                    discoData.map((item, index) => (
                        <Fragment key={index}>
                            <Grid item>
                                <CardsDisco item={item} uid={state} index={index} />
                            </Grid>
                        </Fragment>
                    ))
                ) : (
                    <Grid item>
                        <p>Não há discos disponíveis.</p>
                    </Grid>
                )}
            </Grid>
        </>
    );
}

export default Discos;