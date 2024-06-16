import React from 'react';
import { Grid, TextField } from '@mui/material';

export default function TextFildComponent(props) {
    return (
        <Grid item xs={12}>
            <TextField
                required
                fullWidth
                label={props.label}
                variant="outlined"
                name={props.name}
                value={props.value}
                type={props.type}
                onChange={props.onChange}
            />
        </Grid>
    );
}