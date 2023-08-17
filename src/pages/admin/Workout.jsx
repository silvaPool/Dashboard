import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getWorkout } from "../../services/workout";
import { Grid } from "@mui/material";
import CardsWorkout from "./CardsWorkout";

function Workout() {

    const { state } = useLocation();
    const [workoutData, setWorkoutData] = useState([]);

    console.log(workoutData);

    useEffect(() => {

        async function getWorkoutsData() {
            try {
                const res = await getWorkout(state);
                if (res) {
                    setWorkoutData(res);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getWorkoutsData();
    }, [state]);

    return (
        <>
            <Grid container spacing={2}>
                {workoutData && workoutData.map((item, index) => (
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

export default Workout;