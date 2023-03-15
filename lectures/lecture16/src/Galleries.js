/**
 * The job of Galleries is to show users the available galleries,
 * and let them select the one they want to look at.
 */

import React from "react";

export default function Galleries({galleries}) {
    // some logic at the top:
    console.log(galleries);




    // return some JSX:
    return (
        <section>
            <h2>Available Galleries</h2>
            {
                galleries.map(gallery => {
                    return (
                        <button>Click here to show {gallery.name}</button>
                    )
                })
            }
        </section>
    )

}