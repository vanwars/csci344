import React from "react";

export default function Carousel({title, gallery}) {
    // some logic at the top
    console.log(gallery);
    const currentImageURL = gallery.images[0];

    function previous() {
        console.log('previous');
    }

    function next() {
        console.log('next');
    }

    // return some JSX:
    return (
        <div className="carousel">
            <h1>{title}</h1>
            <img src={currentImageURL} />
            <button onClick={previous}>previous</button>
            <button onClick={next}>next</button>
        </div>
    )

}
