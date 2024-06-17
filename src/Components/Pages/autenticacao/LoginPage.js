import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import FormularioComponent from '../../Components/FormularioComponent';
import TextFildComponent from '../../Components/TextFildComponent';


export default function LoginPage() {
    const navigate = useNavigate();
    const initialFormState = { email: '', senha: '' }
    const [usuario, setUsuario] = useState(initialFormState)

    function handleInputChange(event) {
        const { name, value } = event.target
        setUsuario({ ...usuario, [name]: value })
    }
    const baseUrl = "http://localhost:8080/auth/login";

    async function handleLogin(usuario) {
        if (!usuario.email || !usuario.senha) {
            alert('Preencha todos os campos!')
            return
        }
        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(usuario)
            })
            if (response.ok) {
                const data = await response.json()
                localStorage.setItem('token', data.token)
                localStorage.setItem('user', JSON.stringify(data.usuario))
                navigate('/')
            } else {
                const error = await response.json()
                throw new Error(error.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <FormularioComponent title='Entre com uma conta de estudante ou professor!' size='xs'>
            <Grid container spacing={2}>
                <TextFildComponent label='email' name='email' value={usuario.email} onChange={handleInputChange} />
                <TextFildComponent label='senha' name='senha' type='password' value={usuario.senha} onChange={handleInputChange} />
            </Grid>
            <Stack spacing={2} direction="row" marginTop={2}>
                <Button variant="contained" color="warning" fullWidth onClick={event => {
                    event.preventDefault()
                    navigate('/registar')
                }}>
                    Cadastrar
                </Button>
                <Button variant="contained" color="primary" fullWidth onClick={event => {
                    event.preventDefault()
                    handleLogin(usuario)
                }}>
                    Login
                </Button>
            </Stack>
        </FormularioComponent>
    );
}

