const api = async (endpoint, args = {}) =>
    await fetch(rootURL + "/api" + endpoint, {
        headers: { Authorization: `Bearer ${token}` },
        ...args,
    });

const handleLike = async (post) => {
    api(`/api/likes/${post.id}`, {
        method: post.current_user_like_id ? "DELETE" : "POST",
    });
};

















import React, { useState } from "react";
import { postDataToServer, deleteDataFromServer } from "../server-requests";

/**
 * Job:
 *   1. Renders the bookmark (reflecting whether
 *      the current user has bookmarked or not)
 *   2. Create / Delete bookmarks
 */
export default function Bookmark({ token, bookmarkId, postId }) {
    const [stateBookmarkId, setStateBookmarkId] = useState(bookmarkId);

    async function createBookmark() {
        const sendData = {
            post_id: postId,
        };
        const responseData = await postDataToServer(
            token,
            "/api/bookmarks/",
            sendData
        );
        console.log(responseData);
        setStateBookmarkId(responseData.id);
    }

    async function deleteBookmark() {
        const responseData = await deleteDataFromServer(
            token,
            "/api/bookmarks/" + stateBookmarkId
        );
        console.log(responseData);
        setStateBookmarkId(null);
    }

    console.log(stateBookmarkId);
    if (stateBookmarkId) {
        return (
            <button
                ariaLabel="Unbookmark This Post"
                ariaChecked="true"
                ariaRole="toggle"
                onClick={deleteBookmark}
            >
                <i className="fas fa-bookmark"></i>
            </button>
        );
    } else {
        return (
            <button
                ariaLabel="Bookmark This Post"
                ariaChecked="false"
                ariaRole="toggle"
                onClick={createBookmark}
            >
                <i className="far fa-bookmark"></i>
            </button>
        );
    }
}
