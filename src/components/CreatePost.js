import React from 'react';
import './CreatePost.css';
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const createPost = async() => {
        await addDoc(collection(db, "blogs"), {
            title: title,
            content: content,
            auther:
            { 
                name:auth.currentUser.displayName,
                id:auth.currentUser.uid
            },
            createdTime: new Date(),
        });
        navigate('/');
    }   


    return (
        <div>
            <div className="postContainer">
                <h3>記事を投稿する</h3>
                <div className="inputPost">
                    <input type="text" placeholder="タイトル" onChange={(e) => setTitle(e.target.value)}/>
                    <textarea placeholder="投稿内容を記入" onChange={(e) => setContent(e.target.value)}/>
                    <button className="postButton" onClick={createPost}>投稿</button>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;