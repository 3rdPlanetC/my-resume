export default function Validation(data = {
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
}) {
    let form = {}
    for (let value in data) {
        form = {
            ...form,
            [value]: typeof(data[value]) === "string" ? {
                error: null,
                errorText: null,
                value: data[value]
            } : {
                ...data[value]
            }
        }
    }
    return {
        usernameEmpty: ({
            errorText = "Please enter username in the space."
        }) => {
            const userBlank = form.username.value === ''
            const pwNoBlank = !(form.password.value === '')
            const cpwBlank = (form.confirmPassword !== undefined ? form.confirmPassword.value === '' ? false: true :true)
            const bool = userBlank && (pwNoBlank && cpwBlank)
            return Validation({
                ...form,
                username: {
                    error: bool,
                    errorText: bool ? errorText : '',
                    value: form.username.value
                }
            })
        },
        passwordForm: ( {
            errorText = "Invalid Password.",
            oneupper = false,
            onelower = false,
            onenumber = false,
        }) => {
            let regExp
            switch (true) {
                case oneupper:
                    regExp = /(?=.*[A-Z])/
                case onelower:
                    regExp = /(?=.*[a-z])/
                case onenumber:
                    regExp = /^(?=.*\d)/
                case oneupper && onelower:
                    regExp = /(?=.*[a-z])(?=.*[A-Z])/
                case oneupper && onenumber:
                    regExp = /^(?=.*\d)(?=.*[A-Z])/
                case onelower && onenumber:
                    regExp = /^(?=.*\d)(?=.*[a-z])/
                default:
                    regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/
            }
            const bool = regExp.test(form.password.value)
            return Validation({
                ...form,
                password: {
                    error: bool,
                    errorText: bool ? errorText : '',
                    value: form.password.value
                }
            })
        },
        passwordLength: ({
            min = 6, 
            max = 24, 
            errorText = "You have to type password in length 6-24 characters."
        }) => {
            const regEx = new RegExp(`^.{${min},${max}}$`)
            const bool = !regEx.test(form.password.value)
            return Validation({
                ...form,
                password: {
                    error: bool,
                    errorText: bool ? errorText: '',
                    value: form.password.value
                }
            })
        },
        confirmPasswordMatching: ({
            errorText = "Confirm Password doesn't match with password."
        }) => {
            const cpwNoMatchPw = form.password.value !== form.confirmPassword.value
            const bool = cpwNoMatchPw
            return Validation({
                ...form,
                confirmPassword: {
                    error: bool,
                    errorText: bool ? errorText : '',
                    value: form.confirmPassword.value
                }
            })
        },
        emailForm: ({
            errorText = "Email is invalid."
        }) => {
            const regEx = new RegExp(`\S+@\S+\.S+`)
            const bool = regEx.test(form.email.value)
            return Validation({
                ...form,
                email: {
                    error: bool,
                    errorText: bool ? errorText: '',
                    value: form.email.value
                }
            })
        },
        value: {
            ...form
        }
    }
}