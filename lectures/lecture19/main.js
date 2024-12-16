// https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=track&limit=5

/** 1. Write an asynchronous function that accepts two arguments...
 *       - A search term
 *       - The number of results
 *
 * Your function will then query Spotify based on the arguments provided and
 * returns a list of data matching the search criteria.
 */

async function spotifySearch(searchTerm, limit) {
    // + 1. Build the URL
    const url = `https://www.apitutor.org/spotify/simple/v1/search?q=${searchTerm}&type=track&limit=${limit}`;
    console.log(url);

    // 2. Send the request to Spotify
    const response = await fetch(url); // receives the HTTP headers
    const data = await response.json(); // receives the actual resource (JSON data)

    // 3. Return the list of results
    console.log(data);
    return data;
}

/**
 *  2. Write a function that accepts a JavaScript "track" object and returns an
 *     HTML representation of this object
 *
 *     * "I give you the track data"
 *     * "You give me some HTML stylish representation of the data that can be displayed in the browser"
 */

function generateHTML(trackObj) {
    return `<section>
       ${trackObj.name}
       <img src="${trackObj.album.image_url}" />
    </section>
    `;
}

async function tester() {
    const resultsBeyonce = await spotifySearch("beyonce", 10);
    const resultsBob = await spotifySearch("bob dylan", 5);

    const snippet1 = generateHTML(resultsBeyonce[0]);
    const snippet2 = generateHTML(resultsBob[0]);

    console.log(snippet1);
    console.log(snippet2);
}

tester();

/*  3. Wire up the functiontality that you made to an HTML search form. When
 *     the user types in a search term and clicks the submit button, your form
 *     should show a list of the matching tracks.
 *
 */
