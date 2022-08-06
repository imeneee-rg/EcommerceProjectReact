import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getme, login, register, selectautherror, selectauthstatus } from '../features/users/usersSlice';
import { Alert, message } from 'antd';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';

const Authentication = () => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const history = useHistory()

    const autherror = useSelector(selectautherror)
    const authstatus = useSelector(selectauthstatus)

    const dispatch = useDispatch()

    useEffect(() => {

        console.log('hrllo ');
        if (authstatus === 'success') {
            success()
            history.push('/home')
        }
        
    }, [authstatus]);

    const singin = () => {
        let data = {
            email: email,
            password: password
        }

        dispatch(login(data))
    }

    const success = () => {
        message.success('you successfuly loged in');
    };


    const registerclient = () => {

        let dataaa = {
            name: name,
            email: email,
            password: password
        }

        dispatch(register(dataaa))

    }

    return (
        <div style={{ marginTop: "-200px" }}  >
            <section id="form">{/*form*/}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-1">
                            <div className="login-form">{/*login form*/}
                                <h2>Login to your account</h2>
                                <div>
                                    {autherror.iserror && <Alert style={{ marginBottom: '10px' }} message={autherror.message} type="error" showIcon />}
                                    <input value={email} onChange={(e) => setemail(e.target.value)} type="text" placeholder="email" />
                                    <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="password" />
                                    <span>
                                        <input type="checkbox" className="checkbox" />
                                        Keep me signed in
                                    </span>
                                    <button onClick={() => singin()} className="btn btn-default">Login</button>
                                </div>
                            </div>{/*/login form*/}
                        </div>
                        <div className="col-sm-1">
                            <h2 className="or">OR</h2>
                        </div>
                        <div className="col-sm-4">
                            <div className="signup-form">{/*sign up form*/}
                                <h2>New User Signup!</h2>
                                <div >
                                    <input value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="Name" />
                                    <input value={email} onChange={(e) => setemail(e.target.value)} type="text" placeholder="Email Address" />
                                    <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password" />
                                    <button onClick={() => registerclient()} className="btn btn-default">Signup</button>
                                </div>
                            </div>{/*/sign up form*/}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Authentication
