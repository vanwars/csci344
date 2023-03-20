import React from 'react';
import {getHeaders} from './utils';


export default function LikeButton({post}) {
    // some logic at the top:
    const likeId = post.current_user_like_id;
    const postId = post.id;

    function likeUnlike() {
        console.log(likeId, postId);
        // if it's liked, unlike it, else like it
        if (likeId) {
            console.log('unlike!')
        } else {
            console.log('like!')
            const postData = {
                "post_id": postId
            };
            fetch("/api/posts/likes/", {
                method: "POST",
                headers: getHeaders(token),
                body: JSON.stringify(postData)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
        }
    }


    // return some JSX:
    return (
        <button onClick={likeUnlike}>like</button>
    )

}