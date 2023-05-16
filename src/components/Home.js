import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDocs, collection, query } from "firebase/firestore";
import { orderBy } from "firebase/firestore";
import { db } from '../firebase';
import './Home.css';

const Home = () => {   
    const [posts, setPosts] = useState([]);
    const q = query(collection(db, "blogs"),orderBy("createdTime", "desc"));
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(q);
            setPosts(data.docs.map(doc => doc.data()));
        };
        getPosts();
        
    });
    return (
        <div className= "homePage">
            {posts.map((post) => {
                return(
                    < div className= "postContents">
                        <div className= "postHeader">
                            <h3>{post.title}</h3>
                        </div>
                        <div className= "postTextContainer">
                            <p>{post.content}</p>
                        </div>
                        <div className= "postFooter">
                            <div className= "postImformation">
                                <div className= "postAuther">
                                    <p>{post.auther.name}</p>
                                </div>
                                <div className= "postDate">
                                <p>{post.createdTime.toDate().toLocaleString()}</p>
                                </div>
                            </div>
                            <div className= "postButton">
                                <button>編集</button>
                                <button>削除</button>
                            </div>
                        </div>  
                    </div>
                );
            })}
        </div>
    );
}

export default Home;