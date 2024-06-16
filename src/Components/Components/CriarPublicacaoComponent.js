import { makeStyles } from '@mui/styles';
import { blueGrey } from '@mui/material/colors';
import React from 'react';
import { Fab, Grid, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import Item from '@mui/material/Grid';


const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
    },
    box: {
        width: '133%',
        height: '100%',
        backgroundColor: blueGrey[900],
        borderRadius: '10px',
        padding: '15px',
        textAlign: 'center',
    }
}));
export default function CriarPublicacaoComponent({ children }) {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.container}>
                <Grid item xs={10} className={classes.box}>
                    <Item color={'white'}><b>Criar uma publicação</b>
                        <Fab size="small" color='success' aria-label="add" sx={{ ml: '20px'}} 
                        onClick={event => {
                                event.preventDefault()
                                navigate('/Publicar');
                            }} >
                            <AddIcon />
                        </Fab>
                    </Item>
                </Grid>
                    {children}
            </div>
            
        </Container>
    
    );
}