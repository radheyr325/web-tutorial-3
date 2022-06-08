import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from "react";



const theme = createTheme();





export default function SignUp() {

    const initialValues = { password: "", confpassword:"", fname:"", lname:"",email:""};
    const [formValue, setFormValue] = useState(initialValues);
    const [formError, setFormError] = useState({});
    let errori =0;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formValue));
        if(errori===0)
        {
            console.log("done")
            window.location.href = "/nextpage";
        }
        else{
            console.log("error");
            console.log(formError);
        }
    };

    const validate = (values) => {

        const errors = {};
        const namereg = /[^A-Za-z]/;
        const emailformat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        console.log("hello"+values.email);

        if (values.password.length < 8) {
            errors.password = "Password must have more than or equal to 8 characters";
            errori = 1;
        }
        else if(values.password !== values.confpassword){
            errors.confpassword="Password are not the same";
            errors.password="Password are not the same";
            errori = 1;
        }
        else if(namereg.test(values.fname)){
            errors.fname = "First name should have only Alphabets"
            errori =1;
        }

        else if(namereg.test(values.lname)){
            errors.lname = "Last name should have only Alphabets";
            console.log(values.lname);
            errori =1;
        }
        else if(!emailformat.test(values.email)){
            errors.email = "Email is not valid"
            errori =1;
        }

        else {
            errori=0;
        }
        return errors;

    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        onChange={handleChange}
                                        onSubmit={handleSubmit}
                                        value={formValue.fname}
                                        error={formError.fname}

                                        helperText={formError.fname}
                                        required
                                        fullWidth
                                        variant="standard"
                                        id="fname"
                                        label="First Name"
                                        name="fname"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        onChange={handleChange}
                                        onSubmit={handleSubmit}
                                        value={formValue.lname}
                                        error={formError.lname}
                                        helperText={formError.lname}
                                        required
                                        fullWidth
                                        variant="standard"
                                        id="lname"
                                        label="Last Name"
                                        name="lname"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={handleChange}
                                        onSubmit={handleSubmit}
                                        value={formValue.email}
                                        error={formError.email}

                                        helperText={formError.email}
                                        required
                                        fullWidth
                                        variant="standard"
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={handleChange}
                                        onSubmit={handleSubmit}
                                        value={formValue.password}
                                        error={formError.password}

                                        helperText={formError.password}
                                        required
                                        fullWidth
                                        variant="standard"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={handleChange}
                                        onSubmit={handleSubmit}
                                        value={formValue.confpassword}
                                        error={formError.confpassword}

                                        helperText={formError.confpassword}
                                        required
                                        fullWidth
                                        variant="standard"
                                        name="confpassword"
                                        label="Confirm Password"
                                        type="password"
                                        id="password"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}