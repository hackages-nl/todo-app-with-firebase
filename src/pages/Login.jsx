import React from 'react'
import firebase from 'firebase';
export function LoginPage(){
    const emailRef = React.createRef("")
    const passwordRef = React.createRef("")

    function login(){
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
                // var errorCode = error.code;
                // var errorMessage = error.message;
            });
    }

    return (
        <form action="">
            <input ref={emailRef} type="text" placeholder="username" />
            <input ref={passwordRef} type="password" placeholder="password" />
            <button onClick={login}>Login</button>
        </form>
    )
}