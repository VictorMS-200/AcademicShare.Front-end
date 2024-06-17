import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import { Stack } from '@mui/material';
import { Alert } from '@mui/material';
import { AlertTitle } from '@mui/material';

import FormularioComponent from '../../Components/FormularioComponent';
import TextFildComponent from '../../Components/TextFildComponent';

const baseUrl = "http://localhost:8080/api/v1/publicacao";

export default function PublicarPage() {
    const [image, setImage] = useState(null);
    const [hasError, setHasError] = useState(false);

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(URL.createObjectURL(img));
        }
    };

    const navigate = useNavigate();
    const editorRef = useRef(null);

    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (user === null) {
            console.log('Usuário não autenticado')
            navigate('/login')
        }
        if (user.role !== 'USER') {
            setHasError(true)
        }
    }, [user, navigate])


    const initialFormState = { resumo: '', assunto: { nome: '' }, conteudo: '', professor: '', usuario: {}, imagem: '' }
    const [publicacao, setPublicacao] = useState(initialFormState)

    async function handleRegister(publicacao) {
        publicacao.conteudo = editorRef.current.getContent()
        if (!publicacao.assunto.nome || !publicacao.resumo || !publicacao.conteudo) {
            alert('Preencha todos os campos!')
            return
        }
        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...publicacao, imagem: image, usuario: { idUsuario: user.idUsuario } })
            })
            console.log(user.id)
            console.log(image)
            if (response.ok) {
                navigate('/publicacao')
            } else {
                const error = await response.json()
                throw new Error(error.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    if (hasError) {
        return (
            <FormularioComponent title='Publicar' size='sm'>
                <Alert severity="error">
                    <AlertTitle>Erro</AlertTitle>
                    Você não tem permissão para acessar esta página!
                </Alert>
            </FormularioComponent>
        )
    }
    return (
        <FormularioComponent title='Poste sua publicação agora!' size='xl'>
            <Grid container spacing={2}>
                <TextFildComponent
                    label='assunto'
                    name='assunto'
                    value={publicacao.assunto.nome}
                    onChange={e => {
                        setPublicacao({ ...publicacao, assunto: { nome: e.target.value } })
                    }} />
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        label="resumo"
                        variant="outlined"
                        name='resumo'
                        multiline
                        rows={8}
                        value={publicacao.resumo}
                        onChange={e => {
                            setPublicacao({ ...publicacao, resumo: e.target.value })
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextFildComponent
                        label='professor'
                        name='professor'
                        value={publicacao.professor}
                        onChange={e => {
                            setPublicacao({ ...publicacao, professor: e.target.value })
                        }} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" component="label">
                        Upload File
                        <input type="file" hidden name="myImage" onChange={onImageChange} />
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Editor
                        onInit={(_evt, editor) => editorRef.current = editor}
                        apiKey='iqs46z6w4t1twjwg1fhexhhsmo1k6l39uh2f2sa3lhulqhep'
                        init={{
                            height: 300,
                            menubar: false,
                            plugins: [
                                'anchor', 'autolink', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'table', 'wordcount', 'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            ],
                            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | image media link anchor | codesample emoticons charmap | preview',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'

                        }}
                    />
                </Grid>
            </Grid>
            <Stack spacing={2} direction="row" marginTop={2}>
                <Button variant="contained" color="success" fullWidth onClick={event => {
                    event.preventDefault()
                    handleRegister(publicacao)
                    setPublicacao(initialFormState)
                }}>
                    Publicar
                </Button>
                <Button variant="contained" color="error" fullWidth onClick={event => {
                    event.preventDefault()
                    navigate('/publicacao')
                }}>
                    Cancelar
                </Button>
            </Stack>
        </FormularioComponent>
    );
};