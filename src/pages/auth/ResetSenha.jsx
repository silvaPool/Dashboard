import React  from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik, useField } from 'formik';
import * as Yup from 'yup';
import { styled } from '@mui/system';
import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';



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

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
`

const StyledInput = styled(MyTextInput)`
    width: 25vw;
    height: 5vh;
    border: none;
    border-bottom: 2px solid gray;
    outline: none;
    margin-bottom: 1rem;

    &:focus {
        border-bottom-color:black;
    }
`

const StyledButton = styled(Button)`
    width: 25vw;
    background-color: black;
    color: white;

    &:hover {
        background-color: white;
        color: black;
    }
`

function Reset() {

    const { forgotPassword} = useContext(AuthContext);
    
    return (
        <>
        <Stack spacing={2} textAlign={'center'}>

        <Typography>
            Digite seu melhor email para recuperar a senha!
        </Typography>
          
            <Formik
                initialValues={{email: '', senha: '' }}
                validationSchema={Yup.object({
                    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
                    senha: Yup.string()
                        .min(5, 'A senha deve ter mais de 8 digitos')
                        .required('Senha é obrigatória!'),
                })}
                onSubmit={async (values) => {
                    try {

                        const response = await forgotPassword(values.email)

                        console.log(response)

                    } catch (error) {
                        console.log(error)
                    }

                }}
            >
                {({ handleSubmit }) => (
                    <StyledForm onSubmit={handleSubmit}>
                        <StyledInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="matheus@example.com"
                        />

                        <StyledButton type="submit">senha</StyledButton>


                    </StyledForm>
                )}
            </Formik>

            <Button>
                Voltar para o login
            </Button>

        </Stack>

    </>
    )
}

export default Reset;