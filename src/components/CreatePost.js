import React from 'react';
import './CreatePost.css';
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from '../firebase';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

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
    }   


    return (
        <div>
            <h1>Create Post</h1>
            <p>This is the create post page.</p>
            
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