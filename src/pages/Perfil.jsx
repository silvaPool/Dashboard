import { Avatar, Box, Button, FormLabel, Grid, Stack, TextField } from "@mui/material";
import { Formik, Form, useField } from "formik";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import * as Yup from 'yup';
import { PatternFormat } from 'react-number-format';
import { AuthContext } from "../context/AuthContext";
import { setPhoto } from "../services/profile";
import { useLocation } from "react-router-dom";
import StyledBoxPerfil from "../components/StyledBoxPerfil";
import StyledFormPerfil from "../components/StyledFormPerfil";



const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyTextInputTwo = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log(field);
    return (
        <>

            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input"  {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const StyledInput = styled(MyTextInput)`
&& {
    max-width: 190px;
    background-color: rgba(36, 59, 85, 0.9); 
  color: white;
  padding: .15rem .5rem;
  min-height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: 0px 10px 20px -18px;

    &:focus {
        border-bottom: 2px solid black;
  border-radius: 4px 4px 2px 2px;
    }
    &:hover {
        outline: 1px solid lightgrey;
    }
}`;

const StyledInputTwo = styled(MyTextInputTwo)`
&& {
    max-width: 190px;
    background-color: rgba(36, 59, 85, 0.9); 
  color: white;
  padding: .15rem .5rem;
  min-height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: 0px 10px 20px -18px;

    &:focus {
        border-bottom: 2px solid black;
  border-radius: 4px 4px 2px 2px;
    }
    &:hover {
        outline: 1px solid lightgrey;
    }
}`;

// const StyledButton = styled(Button)`
//    && {
//     color: black;
//     font-size: 15px;
//     font-weight: 300;

//   }

//   &:hover {
//     color: white;
//     background-color: black;
//   }

// `;

// const StyledButtonSubmit = styled(Button)`
//     && {
//         color: 'black';

//     }
// `

const Perfil = () => {

    const { state } = useLocation();

    const [avatar, setAvatar] = useState('');
    const { updateProfileUser, profile, user } = useContext(AuthContext);
    const [fileData, setFileData] = useState();
    const [profileData, setProfileData] = useState();
    const [isAdm, setIsAdm] = useState(false);

    useEffect(() => {
        if (state) {
            setProfileData(state);
            setIsAdm(true);
        }
        if (profile) {
            setProfileData(profile);
        }
        console.log(profileData);
    }, [state, profile])

    useEffect(() => {
        if (profile && profile.urlImage) {
            console.log(profile.urlImage);
            setAvatar(profile.urlImage);
        }
    }, [profile]);

    function handleAvatar(e) {
        const fileUser = e.target.files[0];
        setFileData(fileUser);
        setAvatar(URL.createObjectURL(fileUser));
    }

    async function uploadFileImage() {
        try {
            const url = await setPhoto(fileData, user.uid);
            setAvatar(url);
        } catch (error) {
            console.log(error);
        }


    }

    return (

        <StyledBoxPerfil>
            <Formik
                enableReinitialize
                initialValues={{
                    nome: profileData?.nome ? profileData?.nome : "",
                    sobrenome: profileData?.sobrenome ? profileData?.sobrenome : "",
                    email: profileData?.email ? profileData?.email : "",
                    telefone: profileData?.telefone ? profileData?.telefone : "",
                    cpf: profileData?.cpf ? profileData?.cpf : "",
                    cidade: profileData?.cidade ? profileData?.cidade : "",
                    cep: profileData?.cep ? profileData?.cep : "",
                    rua: profileData?.rua ? profileData?.rua : "",
                    bairro: profileData?.bairro ? profileData?.bairro : "",
                    numero: profileData?.numero ? profileData?.numero : "",
                    complemento: profileData?.complemento ? profileData?.complemento : "",
                }}
                // validationSchema={Yup.object({
                //     nome: Yup.string()
                //         .required('Obrigatório'),
                //     sobrenome: Yup.string()
                //         .required('Obrigatório'),
                //     email: Yup.string()
                //         .required('Obrigatório'),
                //     telefone: Yup.string()
                //         .required('Obrigatório'),
                //     cpf: Yup.string()
                //         .required('Obrigatório'),
                //     cidade: Yup.string()
                //         .required('Obrigatório'),
                //     cep: Yup.string()
                //         .required('Obrigatório'),
                //     rua: Yup.string()
                //         .required('Obrigatório'),
                //     bairro: Yup.string()
                //         .required('Obrigatório'),
                //     numero: Yup.string()
                //         .required('Obrigatório'),
                // })}
                onSubmit={async (values) => {
                    console.log(values);
                    try {
                        await updateProfileUser(values);

                    } catch (error) {
                        console.log(error);
                    }
                }}
            >
                {({ handleChange, values, handleBlur }) => (
                    <StyledFormPerfil>
                        <Grid container spacing={2}>
                            <Grid item lg={12} mb={4}>
                                <Stack alignItems={'flex-start'}>
                                    <FormLabel htmlFor="foto" sx={{ cursor: 'pointer', overflow: 'hidden', borderRadius: '50%' }}>
                                        <Avatar alt="Remy Sharp" src={avatar} sx={{ height: 120, width: 120 }} />
                                    </FormLabel>
                                    <TextField type="file" name="foto" id="foto" onChange={(e) => handleAvatar(e)} sx={{ display: 'none' }} />
                                    <Button variant="outlined" onClick={uploadFileImage}>Atualizar foto</Button>
                                </Stack>
                            </Grid>
                            <Grid item lg={6}>
                                <Stack>
                                    <StyledInput
                                        label="Nome"
                                        name="nome"
                                        type="text"

                                    />
                                </Stack>
                            </Grid>
                            <Grid item lg={6}>
                                <Stack>
                                    <StyledInput
                                        label="Sobrenome"
                                        name="sobrenome"
                                        type="text"

                                    />

                                </Stack>
                            </Grid>
                            <Grid item lg={6}>
                                <Stack>
                                    <StyledInput
                                        label="Email"
                                        name="email"
                                        type="email"

                                    />
                                </Stack>
                            </Grid>
                            <Grid item lg={6}>
                                <Stack>
                                    <PatternFormat format="(##) # ####-####" allowEmptyFormatting mask="_" label="telefone"
                                        name="telefone"
                                        type="tel"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.telefone}
                                        customInput={StyledInputTwo} />

                                </Stack>
                            </Grid>
                            <Grid item lg={6}>
                                <Stack>
                                    <PatternFormat format="###.###.###-##" allowEmptyFormatting mask="_" label="CPF"
                                        name="cpf"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.cpf}
                                        customInput={StyledInputTwo} />

                                </Stack>
                            </Grid>
                            <Grid item lg={6}>
                                <Stack>
                                    <StyledInput
                                        label="Cidade"
                                        name="cidade"
                                        type="text"


                                    />
                                </Stack>
                            </Grid>
                            <Grid item lg={6}>
                                <Stack>
                                    <PatternFormat format="#####-###" allowEmptyFormatting mask="_" label="CEP"
                                        name="cep"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.cep}
                                        customInput={StyledInputTwo} />
                                </Stack>
                            </Grid>
                            <Grid item lg={6}>
                                <Stack>
                                    <StyledInput
                                        label="Rua"
                                        name="rua"
                                        type="text"

                                    />
                                </Stack>
                            </Grid>
                            <Grid item lg={6}>
                                <Stack>
                                    <StyledInput
                                        label="Bairro"
                                        name="bairro"
                                        type="text"

                                    />
                                </Stack>
                            </Grid>
                            <Grid item lg={6}>
                                <Stack>
                                    <StyledInput
                                        label="Número"
                                        name="numero"
                                        type="number"

                                    />
                                </Stack>
                            </Grid>
                            <Grid item lg={6}>
                                <Stack>
                                    <StyledInput
                                        label="Complemento"
                                        name="complemento"
                                        type="text"

                                    />
                                </Stack>
                            </Grid>
                        </Grid>

                        <Button variant="contained" type="submit">Submit</Button>

                    </StyledFormPerfil>
                )}

            </Formik>
        </StyledBoxPerfil>


    );
};

export default Perfil