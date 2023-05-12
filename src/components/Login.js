import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {
    const navigate = useNavigate();
    const loginWithGoogle = () => {
        //googleでログイン
        signInWithPopup(auth, provider).then((result) => {
            // ログイン成功時の処理
            // ローカルストレージに保存
            localStorage.setItem('isAuth', true);
            setIsAuth(true);
            console.log(result);
            // ログイン後に遷移する
            navigate('/');
        }
        ).catch((error) => {
            // ログイン失敗時の処理
            console.log(error);
        }
        );
    }
    return (
        <div>
            <h1>Login</h1>
            <p>Login to start</p>
            <button onClick = {loginWithGoogle}>Googleでログイン</button>
        </div>
    );
}

export default Login;