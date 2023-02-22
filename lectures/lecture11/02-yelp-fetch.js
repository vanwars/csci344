const getRestaurants = async (location, term, limit) => {
    const rootURL = 'https://www.apitutor.org/yelp/simple/v3/businesses/search';
    const endpoint = `${rootURL}?location=${location}&term=${term}&limit=${limit}`;
    const response = await fetch(endpoint);
    const jsonData = await response.json();
    return jsonData;
    //console.log(`Matches for ${term}:`, jsonData);
};

const showRestaurants = async () => {
    const pizza = await getRestaurants('Asheville,+NC', 'pizza', 5);
    console.log(pizza);
}

// note that the thai restaurants might 
// get printed before the pizza restaurants

showRestaurants();
console.log("Hi Cameron");
//showRestaurants('Asheville,+NC', 'thai', 1);