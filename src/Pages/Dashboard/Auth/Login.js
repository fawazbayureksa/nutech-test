import React, { useState } from 'react';
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from 'firebase/firestore';
import firebase from '../../../Firebase';
import { useHistory, Link } from 'react-router-dom';
const Login = () => {
    const db = getFirestore(firebase);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()


    const onLogin = async () => {
        if (!validation()) {
            alert("Please input email and password before!");
            return
        }
        try {
            const queryEmail = query(collection(db, "users"), where("email", "==", email));
            const queryPassword = query(collection(db, "users"), where("password", "==", password));

            const docsEmail = await getDocs(queryEmail);
            const docsPassword = await getDocs(queryPassword);
            let users = []

            docsEmail.forEach((doc) => {
                users.push(doc.data())
            });
            const us = users.find((user) => user.email === email);

            if (!us) {
                alert("Please input a correct email address")
            } else {
                localStorage.setItem('user', JSON.stringify(us));
                history.push("/dashboard");
            }
        }
        catch (err) {
            console.log(err);
        }

    }

    const validation = () => {
        let validate = true
        if (email === '') validate = false
        if (password === '') validate = false

        return validate
    }


    const handleBack = () => {
        history.push("/");
    }


    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-5'>
                        <div className='card p-5 mt-3'>
                            <h3 className='text-center'>Shopi</h3>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control mb-3" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                            </div>
                            <button onClick={onLogin} className="btn btn-primary btn-md btn-block text-white my-3">Login</button>
                            <button onClick={handleBack} className="btn btn-secondary btn-md btn-block text-white">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
