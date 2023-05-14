import React from 'react';
import './Home.css';

const Home = () => {   
    return (
        <div className= "homePage">
            < div className= "postContents">
                <div className= "postHeader">
                    <h3>タイトル</h3>
                </div>
                <div className= "postTextContainer">
                    投稿内容
                </div>
                <div className= "postFooter">
                    <div className= "postImformation">
                        <div className= "postAuther">
                            <p>投稿者</p>
                        </div>
                        <div className= "postDate">
                            <p>投稿日</p>
                        </div>
                    </div>
                    <div className= "postButton">
                        <button>編集</button>
                        <button>削除</button>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Home;