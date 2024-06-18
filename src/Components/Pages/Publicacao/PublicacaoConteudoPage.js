import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles(() => ({
    container: {
        marginTop: '20px',
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        backgroundColor: '#e3f2fd',
        borderRadius: '10px',
        padding: '20px',
    }
}));


export default function PublicacaoConteudoPage() {
    const classes = useStyles();
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const baseUrl = `http://localhost:8080/api/v1/publicacao/${id}`;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(baseUrl);
            setPost(result.data);
            console.log(result.data);
        };
        fetchData();
    }, [baseUrl]);
    return (
        <Container component="main" maxWidth="md">
            <h3>{post.assunto?.nome}</h3>
            <h1>{post.titulo}</h1>
            <div>{post.resumo}</div>
            <div className={classes.container} style={{ marginBottom: '10px' }}>
                <Grid item xs={10} className={classes.box}>
                    <Avatar sx={{ width: 48, height: 48 }} alt={post.usuario?.avatar} src={post.usuario?.avatar} />
                    <div style={{ marginLeft: '10px' }}>
                        <h3 style={{ marginBlock: '0' }}>{post.usuario?.nome}</h3>
                        <p style={{ margin: '0px' }}>{post.dataPublicacao}</p>
                    </div>
                </Grid>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.conteudo }}></div>
        </Container>
    );
};