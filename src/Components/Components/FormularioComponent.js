import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';


const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5vh',
    },
    form: {
        width: '100%',
        marginTop: '1rem'
    },
    button: {
        marginTop: '50vh'
    }
}));


export default function FormularioComponent(props) {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth={props.size}>
            <div className={classes.container}>
                <Typography component="h1" variant="h5">
                    {props.title}
                </Typography>
                <form className={classes.form} noValidate>
                {props.children}
                </form>
            </div>
        </Container>
    );
}
