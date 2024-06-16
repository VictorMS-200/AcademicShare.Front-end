import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardActions, CardContent, Typography, Avatar, CardHeader, Divider } from '@mui/material';

import CriarPublicacaoComponent from '../Components/CriarPublicacaoComponent';


const PublicacaoPage = () => {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);
    const baseUrl = "http://localhost:8080/api/v1/publicacao";

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(baseUrl);
            setPosts(result.data);
        };
        fetchData();
    }, []);

    if (!posts) {
        return (
            <CriarPublicacaoComponent>
                <h1>Posts</h1>
                <p>Nenhum post disponivel!</p>
            </CriarPublicacaoComponent>
        );
    }
    else {
        return (
            <CriarPublicacaoComponent>
                {posts.map((post, Index) => (
                    <Card sx={{ maxWidth: 700, minWidth: 500, margin: 1, borderRadius: 3, boxShadow: 'none', border: '#263238 solid 3px', padding: '10px', backgroundColor: '#e3f2fd' }} key={Index}>
                        <CardHeader
                            title={post.usuario.nome}
                            subheader={post.dataPublicacao}
                            avatar={
                                <Avatar sx={{ width: 48, height: 48 }} alt={post.usuario.avatar} src={post.usuario.avatar} />
                            } />
                            <Divider variant="middle" />
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                                {post.assunto.nome}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {post.resumo}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={event => {
                                event.preventDefault()
                                navigate(`/publicacao/${post.idPublicacao}`)
                            }}>Ler mais</Button>
                        </CardActions>
                    </Card>
                ))}
            </CriarPublicacaoComponent>
        );
    }
};

export default PublicacaoPage;