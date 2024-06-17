import React from 'react';
import { MenuItem } from '@mui/material';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function LoginComponent({ setting, handleCloseUserMenu, settings }) {
    const navigate = useNavigate();
    if (setting === 'Sair' && localStorage.getItem('user') === null) {
        return (
            <MenuItem key={'Login'} onClick={() => {
                handleCloseUserMenu();
                navigate('/login');
            }}>
                <Typography textAlign="center">Login</Typography>
            </MenuItem>
        );
    }
    if (localStorage.getItem('user') != null) {
        const settingsRoutes = [`perfil/${JSON.parse(localStorage.getItem('user')).idUsuario}`, 'sair'];
        return (
            <MenuItem key={setting} onClick={() => {
                handleCloseUserMenu();
                if (setting === 'Sair') {
                    localStorage.clear();
                    navigate('/');
                }
                else
                    navigate('/' + settingsRoutes[settings.indexOf(setting)]);
            }}>
                <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
        );
    }
}