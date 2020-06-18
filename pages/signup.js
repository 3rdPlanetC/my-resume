import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
// library
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

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
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

export default function SignUp() {
    // const router = useRouter()
    const [form, setForm] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = useState({
        username: {
            value: false,
            text: ""
        },
        password: {
            value: false,
            text: ""
        },
        confirmPassword: {
            value: false,
            text: ""
        }
    })
    const [resMessage, setResMessage] = useState(false)
    const validation = form => {
        const { username, password, confirmPassword } = form
        const passwordUpperCase = (!(password.split('').some(i => {
            return i === i.toUpperCase() && !Number.isInteger(parseInt(i))
        })) && password !== '')
        const usernameCase = (password !== '' && confirmPassword !== '') && (username === '')
        const passwordCase = (password === '' && confirmPassword !== '')
        const confirmPasswordCase = (password !== '' && confirmPassword !== '' && password !== confirmPassword)
        setError({
            ...error,
            username: {
                value: usernameCase,
                text: usernameCase ? "Please enter username in the space." : ""
            },
            password: {
                value: passwordCase ? true : (passwordUpperCase ? true : false),
                text: passwordCase ? "Please enter password in the space." : (passwordUpperCase ? "Please type at least 1 uppercase letter" : "")
            },
            confirmPassword: {
                value: confirmPasswordCase,
                text: confirmPasswordCase ? "Confirm Password doesn't match with password." : ""
            }
        })
    }

    const handleChange = e => {
        const key = e.target.name
        const value = e.target.value
        setForm({...form, [key]:value})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/signup', form)
            const { data: { message } } = res
            setResMessage(message)
        } catch (error) {
            console.log(error)
        }
        // router.push('/login')
    }

    const classes = useStyles()
    const { username, password, confirmPassword } = error
    const errorCheck = confirmPassword.value || password.value || username.value
    const blankCheck = !(form.username.length > 0 && form.password.length > 0 && form.confirmPassword.length > 0)
    useEffect(() => {
        validation(form)
    }, [form])
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        error={username.value} helperText={username.text}
                        variant="outlined" margin="normal"
                        required fullWidth
                        id="username" label="Username"
                        name="username" autoComplete="username"
                        autoFocus onChange={handleChange}
                    />
                    <TextField
                        error={password.value} helperText={password.text}
                        variant="outlined" min="6"
                        margin="normal" required
                        fullWidth name="password"
                        label="Password" type="password"
                        id="password" autoComplete="current-password"
                        onChange={handleChange}
                    />
                    <TextField
                        error={confirmPassword.value} helperText={confirmPassword.text}
                        variant="outlined" min="6"
                        margin="normal" required
                        fullWidth name="confirmPassword"
                        label="Confirm Password" type="password"
                        id="confirmPassword" autoComplete="currentPassword"
                        onChange={handleChange}
                    />
                    <Button
                        disabled={errorCheck || blankCheck} type="submit"
                        fullWidth variant="contained"
                        color="primary" className={classes.submit}
                    >
                        Sign Up
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