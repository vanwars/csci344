import React from 'react';

export default function LikeButton({post}) {
    // some logic at the top:
    const likeId = post.current_user_like_id;
    const postId = post.id;

    function likeUnlike() {
        console.log(likeId, postId);
    }


    // return some JSX:
    return (
        <button onClick={likeUnlike}>like</button>
    )

}