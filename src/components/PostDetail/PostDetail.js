import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams ();
    const [post, setPost] = useState ({});
    useEffect (() => {
        const url = `https://jsonplaceholder.typicode.com/comments/${postId}`;
        fetch (url)
        .then (res => res.json())
        .then (data => setPost(data))
    },[])

    return (
        <div style={{border: '1px solid lightgreen', marginLeft:'15px', marginRight:'15px'}}>
            <p style={{textAlign: 'center', fontWeight:'700', color: 'red', border: '5px solid lightgreen'}}> ID: {post.id}</p>
            <h3> Name: {post.name}</h3>
            <p> Email: {post.email}</p>
            <p> Details: 
                <br/>
                {post.body}</p>
        </div>
    );
};

export default PostDetail;