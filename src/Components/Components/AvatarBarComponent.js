import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';


export default function AvatarBarComponent() {
    if (JSON.parse(localStorage.getItem('user'))) {
        return (
            <Avatar alt="Remy Sharp" src={JSON.parse(localStorage.getItem('user')).avatar} />
        );
    }
    else
        return <Avatar sx={{ bgcolor: blue[500] }} />
}