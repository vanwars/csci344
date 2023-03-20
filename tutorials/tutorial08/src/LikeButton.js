import React from 'react';
import {getHeaders} from './utils';


export default function LikeButton({post, token}) {
    // some logic at the top:
    const likeId = post.current_user_like_id;
    const postId = post.id;

    async function likeUnlike() {
        console.log(likeId, postId);
        // if it's liked, unlike it, else like it
        if (likeId) {
            console.log('unlike!')
        } else {
            // code to like a post:
            console.log('like!')
            const postData = {
                "post_id": postId
            };
            const response = await fetch("/api/posts/likes/", {
                method: "POST",
                headers: getHeaders(token),
                body: JSON.stringify(postData)
            });
            const data = await response.json();
            console.log(data);
        }
    }


    // return some JSX:
    return (
        <button onClick={likeUnlike}>like</button>
    )

}