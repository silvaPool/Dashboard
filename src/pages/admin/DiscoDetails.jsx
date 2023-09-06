import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { useLocation } from 'react-router-dom';
import { updateDisco } from '../../services/disco';
import { Button, IconButton, InputLabel, Stack, TextField } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddIcon from '@mui/icons-material/Add';
import { Avatar } from '@mui/material';

function DiscoDetails() {

    const { state } = useLocation();
   

    return (
        <div>
            <h1>{state?.group.title}</h1>
            <Formik
                enableReinitialize
                validateOnChange={false}
                initialValues={{
                    group: state?.group.group ? state?.group.group : [],
                }}
                onSubmit={async (values) => {
                    await updateWorkout(state.uid, values.group, state?.group.title, state.index);
                }}
                render={({ values, handleChange, handleBlur }) => (
                    <Form>
                        <FieldArray
                            name="group"
                            render={(arrayHelpers) => (
                                <Stack direction={"column"}>
                                    {values.group && values.group.length > 0 ? (
                                        values.group.map((groupData, index) => (

                                            <Stack key={index} direction={'column'} spacing={5} mb={3}>
                                                <Stack
                                                    direction={"row"}
                                                    alignItems={"center"}
                                                    height={"100%"}
                                                    spacing={1}
                                                />
                                                <Stack direction={'row'}>
                                                    {/* <InputLabel htmlFor="lastname" sx={{border: '1px solid white'}}>
                                                        Disco
                                                    </InputLabel> */}

                                            
                                                    <TextField
                                                        name={`group.${index}.title`}
                                                        type="text"
                                                        id={`group.${index}.title`}
                                                        value={groupData.title}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        sx={{ width: '50%', border: '1px solid white' }}
                                                        label="Disco"
                                                    />
                                                    <IconButton
                                                        sx={{ color: 'black' }}
                                                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                    >
                                                        <HighlightOffIcon />
                                                    </IconButton>


                                                    <IconButton
                                                          sx={{ color: 'black' }}
                                                        onClick={() => arrayHelpers.insert(index, {
                                                            title: "",
                                                            exercises: [{ title: "", rep: "", quant: "" }],
                                                        })
                                                        } // insert an empty string at a position
                                                    >
                                                        <AddIcon />
                                                    </IconButton>
                                                </Stack>

                                                <FieldArray
                                                    name={`group.${index}.exercises`}
                                                    render={(arrayHelpersExercises) => (
                                                        <div>
                                                            {values.group[index].exercises && values.group[index].exercises.length > 0 ? (
                                                                values.group[index].exercises.map((groupDataExercises, indexExercises) => (
                                                                    <Stack
                                                                        direction={"row"}
                                                                        spacing={3}
                                                                        key={indexExercises}
                                                                    >
                                                                        <TextField
                                                                            name={`group.${index}.exercises.${indexExercises}.title`}
                                                                            type="text"
                                                                            id={`group.${index}.exercises.${indexExercises}.title`}
                                                                            value={groupDataExercises.title}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            sx={{ width: "30%", border: '1px solid white' }}
                                                                            label="Nome"

                                                                        />
                                                                        <TextField
                                                                            name={`group.${index}.exercises.${indexExercises}.rep`}
                                                                            type="text"
                                                                            id={`group.${index}.exercises.${indexExercises}.rep`}
                                                                            value={groupDataExercises.rep}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            sx={{ width: "15%", border: '1px solid white' }}
                                                                            label="Quantidade"

                                                                        />
                                                                        <TextField
                                                                            name={`group.${index}.exercises.${indexExercises}.quant`}
                                                                            type="text"
                                                                            id={`group.${index}.exercises.${indexExercises}.quant`}
                                                                            value={groupDataExercises.quant}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            sx={{ width: "15%", border: '1px solid white' }}
                                                                            label="Valor"

                                                                        />

                                                                        <IconButton
                                                                             sx={{ color: 'black' }}
                                                                            onClick={() =>
                                                                                arrayHelpersExercises.remove(index)
                                                                            }
                                                                        >
                                                                            <HighlightOffIcon />
                                                                        </IconButton>
                                                                        <IconButton
                                                                            sx={{ color: 'black' }}
                                                                            onClick={() => arrayHelpersExercises.insert(index, { title: "", rep: "", quant: "" })} // insert an empty string at a position
                                                                        >
                                                                            <AddIcon />
                                                                        </IconButton>
                                                                    </Stack>
                                                                ))
                                                            ) : (
                                                                <Button type="button" variant="contained" sx={{ width: 200, mb: 4 }} onClick={() => arrayHelpers.push({ title: "", rep: "", quant: "" })}>
                                                                    {/* show this when user has removed all friends from the list */}
                                                                    Adicionar disco
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                />
                                            </Stack>
                                        ))
                                    ) : (
                                        <Button type="button" variant="contained" sx={{ width: 500, mb: 4 }} onClick={() => arrayHelpers.push({
                                            title: "",
                                            exercises: [{ title: "", rep: "", quant: "" }],
                                        })}>
                                            {/* show this when user has removed all friends from the list */}
                                            Adicionar disco
                                        </Button>
                                    )}
                                    <div>
                                        <Button type="submit" variant="contained">Salvar dados</Button>
                                    </div>
                                </Stack>
                            )}
                        />
                    </Form>
                )}
            />
        </div>
    )
}

export default DiscoDetails;