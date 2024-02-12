import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
const ThreePage = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const fetchPosts = async () => {
            const query = searchParams.toString();
            const request = await fetch('https://dummyjson.com/posts?limit=10&skip=30');
            const data = await request.json();
            setPosts(data.posts);
        };

        fetchPosts();
    }, [searchParams]);

    return (
        <>
            <h1>WatchPosts</h1>
            {posts.map((item) => (
                <div key={item.id}>
                    <p>{item.id}</p>
                    <h2>{item.title}</h2>
                    <span>{item.body}</span>
                </div>
            ))}
        </>
    );
};

export default ThreePage;
