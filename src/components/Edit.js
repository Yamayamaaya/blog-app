import React from "react";
import "./Edit.css";
import { useState } from "react";
import { collection, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

const EditWindow = ({ document }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    console.log("hoho---i");
    const updatePost = async () => {
        await updateDoc(collection(db, "blogs"), {
            title: title,
            content: content,
            updateTime: new Date(),
        });
        navigate("/");
    };

    return (
        <div className="inputPost">
            <input
                type="text"
                placeholder={document.title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder={document.content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button className="postButton" onClick={updatePost}>
                投稿
            </button>
        </div>
    );
};

export default EditWindow;
