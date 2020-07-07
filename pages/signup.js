// core
import { useState, useRef } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
// library
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Validation } from '../utils'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: "64px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: "8px",
        // backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: "8px",
    },
    submit: {
        margin: "24px 0 16px",
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

export default (props) => {
    const router = useRouter()
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
            .confirmPasswordMatching()
            .value
        )
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const { username, password } = form
            const res = await axios.post('/api/signup', {
                username: username.value,
                password: password.value,
            })
            const { data: { status, message } } = res
            if (!status) {
                setForm(props.form)
                submitForm.current.reset()
                setResMessage(message)
            } else {
                setResMessage(`${message} and redirect to Login page in 5 second.`)
                setTimeout(() => {
                    router.push('/login')
                }, 5000)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const classes = useStyles()
    const { username, password, confirmPassword } = form
    const errorCheck = confirmPassword.error || password.error || username.error
    const blankCheck = !(username.value.length > 0 && password.value.length > 0 && confirmPassword.value.length > 0)
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form ref={submitForm} className={classes.form} onSubmit={handleSubmit}>
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
                    <TextField
                        error={confirmPassword.error} helperText={confirmPassword.errorText || ""}
                        variant="outlined" min="6"
                        margin="normal" required
                        fullWidth name="confirmPassword"
                        label="Confirm Password" type="password"
                        id="confirmPassword" autoComplete="currentPassword"
                        onChange={handleChange}
                        className={`${classes.textField} ${confirmPassword.error || !confirmPassword.value.length > 0 ? '' : 'passed'}`}
                    />
                    <Button
                        disabled={errorCheck || blankCheck} type="submit"
                        fullWidth variant="contained"
                        className={classes.submit}
                        color="primary"
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

export const getStaticProps =  async context => {
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
                confirmPassword: {
                    error: false,
                    errorText: "",
                    value: ""
                },
            }
        },
    }
}