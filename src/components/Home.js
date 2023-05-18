import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDocs, collection, query, doc, deleteDoc } from "firebase/firestore";
import { orderBy } from "firebase/firestore";
import { db } from "../firebase";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, "blogs"), orderBy("createdTime", "desc"));
    const getPosts = async () => {
      const data = await getDocs(q);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const deleteHandler = async (id) => {
    await deleteDoc(doc(db, "blogs", id)).then(() => {
      navigate("/");
    });
    navigate("/");
  };

  return (
    <div className="homePage">
      {posts.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h3>{post.title}</h3>
            </div>
            <div className="postTextContainer">
              <p>{post.content}</p>
            </div>
            <div className="postFooter">
              <div className="postImformation">
                <div className="postAuther">
                  <p>{post.auther.name}</p>
                </div>
                <div className="postDate">
                  <p>{post.createdTime.toDate().toLocaleString()}</p>
                </div>
              </div>
              <div className="postButton">
                <button>編集</button>
                <button onClick={() => deleteHandler(post.id)}>削除</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
