import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Card, CardContent, CardHeader, Divider } from '@mui/material';

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

    return (
        <Card sx={{ maxWidth: 700, minWidth: 500, margin: 1, borderRadius: 3, boxShadow: 'none', border: '#263238 solid 3px', padding: '10px', backgroundColor: '#e3f2fd' }}>
            <CardHeader
                title={userInfo.nome}
                avatar={
                    <Avatar sx={{ width: 48, height: 48 }} alt={userInfo.avatar} src={userInfo.avatar} />
                } />
            <Divider variant="middle" />
            <CardContent>
            </CardContent>
        </Card>
    );
};

export default UsuarioPage;