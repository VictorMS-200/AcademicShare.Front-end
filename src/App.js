import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Pages/HomePage';
import NavBar from './Components/Pages/NavBar';
import Login from './Components/Pages/autenticacao/LoginPage';
import Registar from './Components/Pages/autenticacao/RegistarPage';
import UsuarioPage from './Components/Pages/UsuarioPage';
import Publicar from './Components/Pages/Publicacao/PublicarPage';
import Publicacao from './Components/Pages/Publicacao/PublicacaoPage';
import PublicacaoConteudoPage from './Components/Pages/Publicacao/PublicacaoConteudoPage';
import RegistarUniversitarioPage from './Components/Pages/autenticacao/RegistarUniversitarioPage';
import RegistarUsuarioPage from './Components/Pages/autenticacao/RegistarUsuarioPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/registar" element={<Registar />} />
                    <Route path="/registar-universitario" element={<RegistarUniversitarioPage/>} />
                    <Route path="/registar-usuario" element={ <RegistarUsuarioPage/> } />

                    <Route path="/publicacao" element={<Publicacao />} />
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