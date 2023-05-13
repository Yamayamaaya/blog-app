import { signOut } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

//ログアウト機能の実装

const Logout = ({setIsAuth}) => {
    const navigate = useNavigate();
    const logoutWithGoogle = () => {
        signOut(auth, provider).then((result) => {
        //googleでログアウト
        // ログアウト成功時の処理
        // ローカルストレージに保存
        localStorage.removeItem('isAuth');
        setIsAuth(false);
        // ログアウト後に遷移する
        navigate('/login');
    }
    ).catch((error) => {
        // ログアウト失敗時の処理
        console.log(error);
    }
    );
    }

    return (
        <div>
            <h1>Logout</h1>
            <button onClick = {logoutWithGoogle
            }>Logout</button>
        </div>
    );
}


export default Logout;