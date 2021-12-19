import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

import styled from 'styled-components'
import Button from '../../components/Button'
import FormGroup from '../../components/FormGroup'
import Header from '../../components/Header'

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const clear = () => {
        setEmail('')
        setPassword('')
    }

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()

        axios.post('http://veenode-staging.herokuapp.com/a/login/', {
            email, password
        })
        .then(res => {
            localStorage.setItem('token', res.data.key)
            history.push('/dashboard')
            clear();
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
            
            // Toast Emitter
            toast.error('Email or Password is not correct', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
        
    }

    return (
        <StyledLogin>
            <Header />

            <div className="login-wrapper">
                <form onSubmit={handleSubmit} className="form">
                    <FormGroup required value={email} onChange={setEmail} label="Email" type="email" />
                    <FormGroup required value={password} onChange={setPassword} label="Password" type="password" />
                    <Button type="submit" text={loading ? "Loading..." : "Login"} />

                    <ToastContainer
                        position="bottom-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </form>
            </div>
        </StyledLogin>
    )
}

export default Login


const StyledLogin = styled.section`
    width: 100%;

    .login-wrapper {
        width: 100%;
        height: 100%;
        min-height: calc(100vh - 200px);
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 768px) {
            padding: 0 1rem;
        }

        .form {
            width: 100%;
            max-width: 376px;
            margin: 0 auto;
        }
    }
`