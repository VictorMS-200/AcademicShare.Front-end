import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Avatar, Card, CardContent, CardHeader, Divider } from '@mui/material';
import Container from '@mui/material/Container';

const UsuarioPage = () => {
    const { id } = useParams();
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/v1/usuarios/${id}`);
                const data = await response.json();
                setUserInfo(data);
            } catch (error) {
                console.error('Error fetching user information:', error);
            }
        };

        fetchUserInfo();
    }, [id]);

    if (!userInfo) {
        return (
            <Container component="main" maxWidth="xs">
                <Alert severity="error">
                    <strong>Erro ao carregar informações do usuário!</strong>
                </Alert>
            </Container>
        );
    }

    if (userInfo.role !== 'USER') {
        return (
            <Container component="main" maxWidth="md">
            <Card sx={{ maxWidth: 700, minWidth: 500, margin: 1, borderRadius: 3, boxShadow: 'none', border: '#263238 solid 3px', padding: '10px', backgroundColor: '#e3f2fd' }}>
                <CardHeader
                    title={userInfo.nome}
                    subheader={userInfo.email}
                    avatar={
                        <Avatar sx={{ width: 48, height: 48 }} alt={userInfo.avatar} src={userInfo.avatar} />
                    } />
                <Divider variant="middle" />
                <CardContent>
                    <p>Esse usuário é um usuário comum!</p>
                </CardContent>
            </Card>
        </Container>
        );
    }
    return (
        <Container component="main" maxWidth="md">
            <Card sx={{ maxWidth: 700, minWidth: 500, margin: 1, borderRadius: 3, boxShadow: 'none', border: '#263238 solid 3px', padding: '10px', backgroundColor: '#e3f2fd' }}>
                <CardHeader
                    title={userInfo.nome}
                    subheader={userInfo.email}
                    avatar={
                        <Avatar sx={{ width: 48, height: 48 }} alt={userInfo.avatar} src={userInfo.avatar} />
                    } />
                <Divider variant="middle" />
                <CardContent>
                    <p>Curso: {userInfo.curso?.nome}</p>
                    <p>Faculdade: {userInfo.curso?.faculdade?.nome}</p>
                    <p>Numero de Matricula: {userInfo.numeroDeMatricula}</p>
                </CardContent>
            </Card>
        </Container>
    );
};

export default UsuarioPage;