// Job of this component is to display a post
// and to allow users to interact with the post

import React from 'react';
import LikeButton from './LikeButton';


export default function Post({post}) {


   
    // JSX representation of a Post
    return (
        <section className="card">
            <img src={post.image_url} alt={post.caption} />
            <div>{post.caption}</div>
            <div className="buttons">
                <LikeButton post={post} />
            </div>
        </section> 
    )  
}