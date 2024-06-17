import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';


const useStyles = makeStyles(() => ({
    image: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(/imagens/homeImage.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Typography: {
        textAlign: 'center',
        fontFamily: 'Merriweather, serif',
    },
    div:  {
        padding: '50px',
        textAlign: 'center',
    }
}));

const HomePage = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.image}>
                <p className={classes.Typography} style={{color: '#fff', fontWeight: '900', fontSize: '3rem'}}>
                    Bem-vindo ao AcademicShare!
                    <br />
                    Um lugar para compartilhar conhecimento.
                </p>
            </div>
            <div className={classes.div} style={{ backgroundColor: '#F5f5f5' }}>
                <p className={classes.Typography} style={{color: '#000000', fontWeight: '900', fontSize: '2rem'}}>
                    Como funciona?
                </p>
                <Typography variant="body1" align="center" gutterBottom>
                    O AcademicShare é uma plataforma para compartilhamento de conhecimento entre estudantes e professores.
                    <br />
                    Aqui você pode compartilhar seus conhecimentos, tirar dúvidas e aprender com outras pessoas.
                </Typography>
            </div>
            <div className={classes.div}>
                <p className={classes.Typography} style={{color: '#000000', fontWeight: '900', fontSize: '2rem'}}>
                    Por que usar o AcademicShare?
                </p>
                <Typography variant="body1" align="center" gutterBottom>
                    A plataforma é gratuita e foi criada para ajudar estudantes e professores a compartilhar conhecimento.
                    <br />
                    Aqui você pode encontrar materiais de estudo, tirar dúvidas e compartilhar conhecimento com outras pessoas.
                </Typography>
            </div>
            <div className={classes.div} style={{ backgroundColor: '#F5f5f5' }}>
                <p className={classes.Typography} style={{color: '#000000', fontWeight: '900', fontSize: '2rem'}}>
                    Faça login ou cadastre-se para começar a usar!
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <ButtonGroup variant="contained" aria-label="Loading button group">
                    <Button color="primary" href="/login">
                        Login
                    </Button>
                    <Button color="primary" href="/registar">
                        Cadastro
                    </Button>
                </ButtonGroup>
                </div>
            </div>
        </>
    );
};

export default HomePage;