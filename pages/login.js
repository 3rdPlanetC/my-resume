import { useState, useRef } from 'react'
import axios from 'axios'
import Router from 'next/router'
// library
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Validation from '../utils/validation'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    textField: {
        '&.passed fieldset': {
            borderColor: 'green',
            borderWidth: "2px"
        },
        '&.passed > div:hover fieldset': {
            borderColor: 'green'
        }
    }
}))


export default function Login(props) {
    const submitForm = useRef(null)
    const [form, setForm] = useState(props.form)
    const [resMessage, setResMessage] = useState(false)

    const handleChange = e => {
        const key = e.target.name
        const value = e.target.value
        setForm(
            Validation({
                ...form, 
                [key]:value
            }).usernameEmpty()
            .passwordUppercase()
            .value
        )
    }

    const handleSubmit = async e => {
        setResMessage("Authenticating...")
        e.preventDefault()
        try {
            const { username, password } = form
            const res = await axios.post('/api/login', {
                username: username.value,
                password: password.value,
            })
            const { status, token } = res.data
            if (!status) {
                setForm(props.form)
                submitForm.current.reset()
            } else {
                console.log(token)
                // const isLogin = await axios.get('/api/auth/redirect', {
                //     headers: {
                //         Authorization: `Bearer ${token}`
                //     }
                // })
                // const { message } = isLogin.data
                // setResMessage(message)
                // Router.push('/dashboard')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const classes = useStyles()
    const { username, password } = form
    const errorCheck = password.error || username.error
    const blankCheck = !(username.value.length > 0 && password.value.length > 0)
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form ref={submitForm} className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        error={username.error || false} helperText={username.errorText || ""}
                        variant="outlined" margin="normal"
                        required fullWidth
                        id="username" label="Username"
                        name="username" autoComplete="username"
                        autoFocus onChange={handleChange}
                        className={`${classes.textField} ${username.error || !username.value.length > 0 ? '' : 'passed'}`}
                    />
                    <TextField
                        error={password.error} helperText={password.errorText || ""}
                        variant="outlined" min="6"
                        margin="normal" required
                        fullWidth name="password"
                        label="Password" type="password"
                        id="password" autoComplete="current-password"
                        onChange={handleChange}
                        className={`${classes.textField} ${password.error || !password.value.length > 0 ? '' : 'passed'}`}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        disabled={errorCheck || blankCheck}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    {resMessage ? resMessage : ''}
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            form: {
                username: {
                    error: false,
                    errorText: "",
                    value: ""
                },
                password: {
                    error: false,
                    errorText: "",
                    value: ""
                },
            }
        },
    }
}