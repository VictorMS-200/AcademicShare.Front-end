import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Grid } from '@mui/material';
import { Stack } from '@mui/material';
import { Alert } from '@mui/material';

import FormularioComponent from '../../Components/FormularioComponent';
import TextFildComponent from '../../Components/TextFildComponent';

const useStyles = makeStyles(() => ({
    button: {
        marginTop: '50vh'
    }
}));

const RegistarUsuarioPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null)

    const initialFormState = { nome: '', email: '', senha: '', avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png', role: 'GUEST' }
    const [usuario, setUsuario] = useState(initialFormState)
    const classes = useStyles();

    function handleInputChange(event) {
        const { name, value } = event.target
        setUsuario({ ...usuario, [name]: value })
    }

    const baseUrl = "http://localhost:8080/auth/register";

    async function handleRegister(usuario) {
        if (!usuario.nome || !usuario.email || !usuario.senha) {
            setError('Preencha todos os campos!')
            return
        }
        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(usuario)
            })
            console.log(usuario)
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
        <>
            <FormularioComponent title='Crie agora uma conta de usuario!' size='xs'>
                {error && <Alert severity="error" style={{ marginBottom: '10px' }}>{error}</Alert>}
                <Grid container spacing={2}>
                    <TextFildComponent 
                        label='nome'
                        name='nome'
                        value={usuario.nome} 
                        onChange={handleInputChange}/>
                    <TextFildComponent 
                        label='email'
                        name='email'
                        value={usuario.email} 
                        onChange={handleInputChange}/>
                    <TextFildComponent 
                        label='senha' 
                        name='senha' 
                        type="password"
                        value={usuario.senha} 
                        onChange={handleInputChange}/>
                </Grid>
                <Stack spacing={2} direction="row" marginTop={2}>
                    <Button variant="contained" color="warning" fullWidth onClick={event => {
                        event.preventDefault()
                        navigate('/login')
                    }}>
                        Login
                    </Button>
                    <Button variant="contained" color="primary" fullWidth className={classes.button} onClick={event => {
                        event.preventDefault()
                        handleRegister(usuario)
                    }}>
                        Criar conta
                    </Button>
                </Stack>
            </FormularioComponent>
        </>
    );
};

export default RegistarUsuarioPage;