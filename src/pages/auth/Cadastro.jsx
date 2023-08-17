import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik, useField } from 'formik';
import * as Yup from 'yup';
import { styled } from '@mui/system';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import GoogleIcon from '@mui/icons-material/Google';
import StyledButtonCadastro from '../../components/StyledButtonCadastro';
import StyledFormCadastro from '../../components/StyledFormCadastro';

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



function Cadastro() {

    const { signUp, socialLogin } = useContext(AuthContext);

    async function signInGoogle() {
       await socialLogin();
    }

    return (
        <>
            <Stack spacing={2} textAlign={'left'}>
                <Formik
                    initialValues={{ primeiroNome: '', sobrenome: '', email: '', senha: '' }}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Email inválido').required('Email é obrigatório'),
                        senha: Yup.string()
                            .min(5, 'A senha deve ter mais de 8 digitos')
                            .required('Senha é obrigatória!'),
                        senhaRepet: Yup.string()
                            .oneOf([Yup.ref("senha"), null], "As senhas não estão iguais")
                            .required("A senha é obrigatória"),

                    })}
                    onSubmit={async (values) => {
                        const res = await signUp(values.email, values.senha);
                        if (res.user) {
                            alert("Conta cadastrada com sucesso");
                        } else {
                            alert("Ocorreu um erro, tente com um email diferente");
                        }

                    }}
                >
                    {({ handleSubmit }) => (
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

                            <StyledInput

                                name="senhaRepet"
                                type="password"
                                placeholder="******"
                            />


                            <StyledButtonCadastro type="submit">Enviar</StyledButtonCadastro>


                        </StyledFormCadastro>
                    )}
                </Formik>

                <StyledButtonCadastro onClick={signInGoogle}>CONTINUE COM O GOOGLE <GoogleIcon /> </StyledButtonCadastro>

            </Stack>

        </>
    )
}

export default Cadastro;