
import { initializeApp } from '@firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import 'firebase/compat/auth';
import 'firebaseui/dist/firebaseui.css';
import React from 'react';
import config from '../config/config';

class Login extends React.Component {
    
    componentDidMount(){
        const app = initializeApp(config);
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, "dougrchamberlain@gmail.com", "123456")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.uid);
 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
       
    }
    render() {
        return (
            //show login form steal one from somewhere.
            <div id="firebaseui-auth-container">authentication</div>
        )
    }
}

export default Login;