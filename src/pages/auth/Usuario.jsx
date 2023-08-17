import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik, useField } from 'formik';
import * as Yup from 'yup';
// import Elvis from '../assets/images/elvis.jpg'
import Box from '@mui/material/Box';
import Elvis from '../../assets/images/elvis.jpg'
import { styled } from '@mui/system';
import { Button, TextField, Typography } from '@mui/material';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';
import GoogleIcon from '@mui/icons-material/Google';
import Stack from '@mui/material/Stack';
import StyledFormCadastro from '../../components/StyledFormCadastro';
import StyledButtonCadastro from '../../components/StyledButtonCadastro';

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


const StyledInput = styled(MyTextInput)`
&& {
    margin-bottom: 1rem;
    width: 100%;
    padding: 12px 18px;
    font-size: 16px;
    font-family: inherit;
    box-shadow: 0 0 0 1px #243B55;
    border: none;
    border-radius: 25px;
    background-color: #fff5f5;
    transition: all .3s;

    &::placeholder {
        color: #243B55;
        font-size: 14px;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 10px 1px blue;
        border: none;
        transition: all .3s;
    }
}`;



function Usuario() {

    const navigate = useNavigate();
    const { login, user, signed } = useContext(AuthContext);
    const [errorsFirebase, setErrosFirebase] = useState("");

    const { signUp, socialLogin } = useContext(AuthContext);

    async function signInGoogle() {
       await socialLogin();
    }


    return (
        <>
            <Stack spacing={4} textAlign={'left'}>
                <Formik
                    initialValues={{ email: '', senha: '' }}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Email inválido').required('Email é obrigatório'),
                        senha: Yup.string()
                            .min(5, 'A senha deve ter mais de 8 digitos')
                            .required('Senha é obrigatória!'),
                    })}
                    onSubmit={async (values) => {

                        const res = await login(values.email, values.senha);
                        if (res.user) {
                            if (res.user.email === 'admin@admin.com') {
                                navigate("/home/admin");
                            } else {
                                navigate("/student");
                            }
                        } else {
                            setErrosFirebase("Ronaldo não encontrado");
                            // alert("Ronaldo não encontrado");
                            // if (res.code === "auth/user-not-found") {
                            //     alert("Email não encontrado");
                            // }
                            // console.log(res.code, 'Error code');
                            // console.log(res.message, 'Error mensagem');
                        }

                    }}
                >

                    {({ handleSubmit, errors }) => (
                        <StyledFormCadastro onSubmit={handleSubmit}>
                            <StyledInput
                            
                                name="email"
                                type="email"
                                placeholder="matheus@example.com"
                            />

                            <StyledInput
                               
                                name="senha"
                                type="password"
                                placeholder="******"
                            />

                            <StyledButtonCadastro type="submit">Submit</StyledButtonCadastro>

                            <StyledButtonCadastro variant='outlined'  onClick={() => navigate("/reset")}>
                                Esqueci minha senha
                            </StyledButtonCadastro>


                            <StyledButtonCadastro onClick={signInGoogle}>CONTINUE COM O GOOGLE <GoogleIcon /> </StyledButtonCadastro>


                        </StyledFormCadastro>

                    )}
                </Formik>
                <Typography variant='body1'>{errorsFirebase}</Typography>
                
                {/* <Typography>
                    ou entre com suas redes sociais
                </Typography> */}



                {/* <Typography>
                    Não tem uma conta?
                </Typography> */}

                {/* <StyledButton onClick={() => navigate("/cadastro")}>
                    Clique aqui para fazer o seu cadastro!
                </StyledButton> */}

            </Stack>
        </>
    )
}

export default Usuario;