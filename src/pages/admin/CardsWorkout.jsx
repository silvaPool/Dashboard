import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import StyledCard from '../../components/StyledCard';
import StyledButton from '../../components/StyledButton';
import StyledActions from '../../components/StyledActions';
import { Box } from '@mui/material';
import StyledBoxCard from '../../components/StyledBoxCard';


function CardsWorkout({ item, uid, index }) {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    return (
        <>

        <StyledBoxCard>
            <StyledCard>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{borderBottom: '1px solid white'}}>
                        {item.title}
                    </Typography>
                    <Typography variant="body1">
                        {!item.group && 0}
                        {item?.group?.length}{" "}
                        {item?.group?.length > 1 ? "discos" : "disco"}
                    </Typography>
                </CardContent>
                <StyledActions >
                    <StyledButton
                        onClick={() => {
                            if (user.email === "admin@admin.com") {
                                navigate("/admin/workout-details",
                                    {
                                        state: { group: item, uid: uid, index: index },
                                    });
                            } else {
                                navigate("/home/student/workout-details",
                                {
                                    state: item,
                                });

                            }
                        }
                        }


                    >Visualizar</StyledButton>
                </StyledActions>


            </StyledCard>

            </StyledBoxCard>

        </>
    );
}

export default CardsWorkout;