// data fetching function
const fetchAndShowTweets = async (searchTerm, param2) => {
    // retrieve the tweets of interest...
    const url = `https://www.apitutor.org/twitter/simple/1.1/search/tweets.json?q=${searchTerm}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    //...and when they return, invoke the callback functiom
    // with the returned data (list of tweets) as an argument.
    param2(data);
}

// display function 1
const printTwitterUsers = listOfTweets => {
    listOfTweets.forEach(tweet => {
        console.log(tweet.screen_name);
    })
}

// display function 2
const printTwitterRetweets = listOfTweets => {
    listOfTweets.forEach(tweet => {
        console.log(tweet.retweet_count);
    })
}

fetchAndShowTweets('dogs', printTwitterRetweets);
fetchAndShowTweets('cats', printTwitterUsers);
fetchAndShowTweets('birds', printTwitterRetweets);