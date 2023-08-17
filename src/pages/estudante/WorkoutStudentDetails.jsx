import { useLocation } from "react-router-dom";
import CardsWorkout from "../admin/Workout";
import { Grid, Typography } from "@mui/material";
import CardDisco from "../../components/CardDisco";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

function StudentWorkoutDetails() {

    const { state } = useLocation();

    const { userExercises } = useContext(AuthContext);

    return (
        <Grid container spacing={2}>
            {state && state.group && state.group.map((item, index) => (
                <Grid item key={index}>
                    <Typography sx={{ color: 'white' }}>
                        {/* <CardDisco item={item} /> */}
                        {/* {item.title} */}

                        <Grid container spacing={3}>
                            {item.exercises.map((data, index) => (
                                <Grid item key={index}>
                                    <CardDisco item={data} />
                                </Grid>
                            ))}
                        </Grid>

                    </Typography>
                    {/* <CardsWorkout item={item} /> */}
                </Grid>
            ))}
        </Grid>
    )
}

export default StudentWorkoutDetails;