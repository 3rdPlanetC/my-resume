const Validation = (data = {
    username: "",
    password: "",
    confirmPassword: ""
}) => {
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
        usernameEmpty: (userText = "Please enter username in the space.") => {
            const userBlank = form.username.value === ''
            const pwNoBlank = !(form.password.value === '')
            const cpwBlank = (form.confirmPassword !== undefined ? form.confirmPassword.value === '' ? false: true :true)
            const bool = userBlank && (pwNoBlank && cpwBlank)
            return Validation({
                ...form,
                username: {
                    error: bool,
                    errorText: bool ? userText : '',
                    value: form.username.value
                }
            })
        },
        passwordUppercase: (pwText = "Please type at least 1 uppercase letter") => {
            const noUppercase = !(form.password.value.split('').some(i => i === i.toUpperCase() && !Number.isInteger(parseInt(i))))
            const pwNoBlank = form.password.value !== ''
            const bool = noUppercase && pwNoBlank
            return Validation({
                ...form,
                password: {
                    error: bool,
                    errorText: bool ? pwText : '',
                    value: form.password.value
                }
            })
        },
        confirmPasswordMatching: (cpwText = "Confirm Password doesn't match with password.") => {
            const pwNoBlank = form.password.value !== ''
            const cpwNoBlank = form.confirmPassword.value !== ''
            const cpwNoMatchPw = form.password.value !== form.confirmPassword.value
            const bool = pwNoBlank && cpwNoBlank && cpwNoMatchPw
            return Validation({
                ...form,
                confirmPassword: {
                    error: bool,
                    errorText: bool ? cpwText : '',
                    value: form.confirmPassword.value
                }
            })
        },
        value: {
            ...form
        }
    }
}

export default Validation