// core
import { useState, useRef } from 'react'
import axios from 'axios'
import Router from 'next/router'
// library
import { Avatar, Button, TextField, Grid, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'
// custom
import { Validation } from '../utils'
// components
import { Text } from '../components'

const useStyles = makeStyles(theme => ({
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
        width: '100%',
        marginTop: "8px",
        marginBottom: "8px"
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


export default props => {
    // useRef
    const submitForm = useRef(null)

    // useState
    const [form, setForm] = useState(props.form)
    const [resMessage, setResMessage] = useState(false)

    // functions
    const handleChange = ev => {
        const key = ev.target.name
        const value = ev.target.value
        setForm(
            Validation({
                ...form, 
                [key]:value
            })
            .usernameEmpty()
            .passwordLength({
                min: 6,
                max: 24
            })
            .value
        )
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setResMessage("Authenticating...")
        try {
            const { username, password } = form
            const res = await axios.post('/api/login', {
                username: username.value,
                password: password.value,
            })
            const { status, message, token } = res.data
            if (!status) {
                setForm(props.form)
                submitForm.current.reset()
                setResMessage(message)
            } else {
                const isLogin = await axios.get('/api/auth/redirect', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const { message } = isLogin.data
                setResMessage(message)
                Router.push('/admin')
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
                        name="username"
                        autoFocus onChange={handleChange}
                        className={`${classes.textField} ${username.error || !username.value.length > 0 ? '' : 'passed'}`}
                    />
                    <TextField
                        error={password.error} helperText={password.errorText || ""}
                        variant="outlined"  
                        margin="normal" required
                        fullWidth name="password"
                        label="Password" type="password"
                        id="password"
                        onChange={handleChange}
                        className={`${classes.textField} ${password.error || !password.value.length > 0 ? '' : 'passed'}`}
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
                    
                    <Grid container>
                        <Grid item xs>
                            <Text ele="body1" fontClass="kanit-regular" gutterBottom>
                                {resMessage ? resMessage : ''}
                            </Text>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export const getStaticProps = async ctx => {
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