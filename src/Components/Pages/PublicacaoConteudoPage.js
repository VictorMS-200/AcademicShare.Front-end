import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';

export default function PublicacaoConteudoPage() {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const baseUrl = `http://localhost:8080/api/v1/publicacao/${id}`;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(baseUrl);
            setPost(result.data);
        };
        fetchData();
    }, [baseUrl]);
    return (
        <Container component="main" maxWidth="md">
            <h3>{post.resumo}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.conteudo }}></div>
        </Container>
    );
};