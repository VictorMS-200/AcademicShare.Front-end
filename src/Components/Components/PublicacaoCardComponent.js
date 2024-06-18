import { Button, Card, CardActions, CardContent, CardHeader, Divider, Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function PublicacaoCardComponent({ posts }) {
    const navigate = useNavigate();
    return (
        <div>
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
                        <Typography sx={{ mt: 1.5 }} color="text.secondary">
                            Professor: {post.professor}
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
        </div>
    );
}