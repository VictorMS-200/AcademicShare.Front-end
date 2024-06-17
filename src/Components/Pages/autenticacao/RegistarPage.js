import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Container, Typography } from '@mui/material';


const useStyles = makeStyles(() => ({
    button: {
        marginTop: '50vh'
    },
    texto: {
        textAlign: 'center',
        marginTop: '20px'
    },
    box: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        backgroundColor: '#e3f2fd',
        borderRadius: '10px',
        padding: '20px',
        cursor: 'pointer'
    },
}));

export default function RegistarUsuarioPage() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="sm">
            <h1 className={classes.texto}>Quem é você?</h1>
            <p>Antes de começar, precisamos saber quem você é. Por favor, selecione uma das opções abaixo.</p>
            <Grid className={classes.box} onClick={event => {
                    event.preventDefault()
                    window.location.href = '/registar-universitario'}}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                            <img src="https://img.icons8.com/ios/452/student-center.png" alt="Estudante" style={{ width: 96, height: 96 }} />
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2} >
                            <Grid item xs>
                                <Typography gutterBottom variant="h5">
                                    Universitario
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Estudante de uma universidade publica ou privada
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid className={classes.box} onClick={event => {
                    event.preventDefault()
                    window.location.href = '/registar-usuario'}}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <img src="https://img.icons8.com/ios/452/teacher.png" alt="Professor" style={{ width: 96, height: 96 }} />
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2} >
                            <Grid item xs>
                                <Typography gutterBottom variant="h5">
                                    Usuário
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Apenas alguém interessado em artigos cientificos e pesquisas
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}