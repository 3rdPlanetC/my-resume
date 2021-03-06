// core
import { useState, useRef, Fragment } from 'react'
import axios from 'axios'
import { setCookie } from 'nookies'
import Router from 'next/router'
import styled from 'styled-components'
import cookies from 'next-cookies'
// import Cryptr from 'cryptr'
import jwt from 'jsonwebtoken'
// library
import { Avatar, Button, TextField, Grid, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
// custom
import { Validation } from '../utils'
import keys from '../config'
// components
import { Seo, Text } from '../components'

const PaperStyled = styled(Grid)`
    margin-top: ${props => props.theme.spacing(8)}px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AvatarStyled = styled(Avatar)`
    margin: ${props => props.theme.spacing(1)}px;
    background-color: ${props => props.theme.grid.background}
`

const ButtonStyled = styled(Button)`
    margin: 24px 0 16px;
`

const FormStyled = styled.form`
    width: 100%;
    margin-top: 8px;
    margin-bottom: 8px;
`

const TextFieldStyled = styled(TextField)`
    &.passed fieldset {
        border-color: green;
        border-width: 2px;
    }
    &.passed > div:hover fieldset {
        border-color: green;
    }
`

export default props => {
    // props
    const { theme } = props
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
                setResMessage(message)
                setForm(props.form)
                submitForm.current.reset()
            } else {
                setResMessage(message)
                // set user in store
                Router.push('/admin')
            }
        } catch (error) {
            setForm(props.form)
            submitForm.current.reset()
            setResMessage("Login fail. your network is down or wrong username password.")
            console.log(error.status)
        }
    }

    const { username, password } = form
    const errorCheck = password.error || username.error
    const blankCheck = !(username.value.length > 0 && password.value.length > 0)
    return (
        <Fragment>
            <Seo title="E3T Login"></Seo>
            <Container component="main" maxWidth="xs">
                <PaperStyled theme={theme}>
                    <AvatarStyled theme={theme}>
                        <LockOutlinedIcon style={{color: 'white'}}/>
                    </AvatarStyled>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <FormStyled ref={submitForm} onSubmit={handleSubmit}>
                        <TextFieldStyled
                            error={username.error || false} helperText={username.errorText || ""}
                            variant="standard" margin="normal"
                            required fullWidth
                            id="username" label="Username"
                            name="username"
                            autoFocus onChange={handleChange}
                            className={`${username.error || !username.value.length > 0 ? '' : 'passed'}`}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextFieldStyled
                            error={password.error} helperText={password.errorText || ""}
                            variant="standard"  
                            margin="normal" required
                            fullWidth name="password"
                            label="Password" type="password"
                            id="password"
                            onChange={handleChange}
                            className={`${password.error || !password.value.length > 0 ? '' : 'passed'}`}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <ButtonStyled
                            disabled={errorCheck || blankCheck}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Sign In
                        </ButtonStyled>
                        
                        <Grid container>
                            <Grid item xs>
                                <Text ele="body1" fontClass="kanit-regular" gutterBottom>
                                    {resMessage ? resMessage : ''}
                                </Text>
                            </Grid>
                        </Grid>
                    </FormStyled>
                </PaperStyled>
            </Container>
        </Fragment>
    )
}

export const getServerSideProps = async ctx => {
    // if (cookies(ctx).token) {
    //     const cryptr = new Cryptr(keys.tokenSecret)
    //     const token = cryptr.decrypt(cookies(ctx).token)
    //     try {
    //         const userData = jwt.verify(token, keys.tokenSecret)
    //         return {
    //             props: {
    //                 form: {
    //                     username: {
    //                         error: false,
    //                         errorText: "",
    //                         value: ""
    //                     },
    //                     password: {
    //                         error: false,
    //                         errorText: "",
    //                         value: ""
    //                     },
    //                 },
    //                 token: userData
    //             },
    //         }
    //     } catch(err) {
    //         res.status(401).send({
    //             message: 'Authorization is not valid.'
    //         })
    //     }
    // } else {
    //     return {
    //         props: {
    //             form: {
    //                 username: {
    //                     error: false,
    //                     errorText: "",
    //                     value: ""
    //                 },
    //                 password: {
    //                     error: false,
    //                     errorText: "",
    //                     value: ""
    //                 },
    //             },
    //         },
    //     }
    // }
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
            },
        },
    }
}