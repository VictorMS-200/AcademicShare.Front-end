import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Pages/HomePage';
import Publicacao from './Components/Pages/PublicacaoPage';
import NavBar from './Components/Pages/NavBar';
import Login from './Components/Pages/autenticacao/LoginPage';
import Registar from './Components/Pages/autenticacao/RegistarPage';
import Publicar from './Components/Pages/autenticacao/PublicarPage';
import PublicacaoConteudoPage from './Components/Pages/PublicacaoConteudoPage';
import UsuarioPage from './Components/Pages/UsuarioPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/publicacao" element={<Publicacao />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registar" element={<Registar />} />
                    <Route path="/publicar" element={<Publicar />} />
                    <Route path="/publicacao/:id" element={<PublicacaoConteudoPage />} />
                    <Route path="/perfil/:id" element={<UsuarioPage/>} />
                    <Route path="*" element={<h1>Page not found</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;