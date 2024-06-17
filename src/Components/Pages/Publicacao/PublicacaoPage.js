import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';

import CriarPublicacaoComponent from '../../Components/CriarPublicacaoComponent';
import PublicacaoCardComponent from "../../Components/PublicacaoCardComponent";


export default function PublicacaoPage() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);
    const [hasError, setHasError] = useState(false);

    const baseUrl = "http://localhost:8080/api/v1/publicacao";

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(baseUrl);
            setPosts(result.data);
        };
        fetchData();
    }, []);

    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (user === null) {
            console.log('Usuário não autenticado')
            navigate('/login')
        }
        if (user?.role !== 'USER') {
            setHasError(true)
        }
    }, [user, navigate])

    if (!posts && hasError) {
        return (
            <Container component="main" maxWidth="xs">
                <h1>Posts</h1>
                <p>Nenhum post disponivel!</p>
            </Container>
        );
    }
    
    if (!posts) {
        return (
            <CriarPublicacaoComponent>
                <h1>Posts</h1>
                <p>Nenhum post disponivel!</p>
            </CriarPublicacaoComponent>
        );
    }

    if (hasError) {
        return (
            <Container component="main" maxWidth="xs">
                <PublicacaoCardComponent posts={posts} />
            </Container>
        );
    }

    else {
        return (
            <CriarPublicacaoComponent>
                <PublicacaoCardComponent posts={posts} />
            </CriarPublicacaoComponent>
        );
    }
};