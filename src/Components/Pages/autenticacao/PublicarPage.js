import React, { useState } from 'react';
import { useRef } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import { Stack } from '@mui/material';

import FormularioComponent from '../../Components/FormularioComponent';
import TextFildComponent from '../../Components/TextFildComponent';

const baseUrl = "http://localhost:8080/api/v1/publicacao";

export default function PublicarPage() {
    const navigate = useNavigate();
    const editorRef = useRef(null);

    const user = JSON.parse(localStorage.getItem('user'));

    const initialFormState = { resumo: '', assunto: { nome: '' }, usuario: { idUsuario: user.idUsuario }, conteudo: '' }
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
                body: JSON.stringify(publicacao)
            })
            console.log(user.id)
            console.log(publicacao)
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