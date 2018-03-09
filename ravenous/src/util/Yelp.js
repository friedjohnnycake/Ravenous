
const apiKey = 'MwKeMvCJh7wsBof6HhrENPGDP1bJVERA6mSMtK2PZk1nx5nSOhMo0Q7Gc2iBxikq-_m0D_uvm7J5ASc7AKzpk7EwOKp6jLEZZHthoHxEVqAa_6C-pvGzLMJN6pCiWnYx';
const Yelp = {
        search (term, location, sortBy){
            return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: { {Authorization: `Bearer ${apiKey}`} }
                }).then(response => {return response.json();
                 ).then(jsonResponse => {
                    if(jsonResponse.businesses){
                        console.log(jsonResponse.businesses);
                        return jsonResponse.businesses.map(business => {
                            return {
                                id:,
                                imageSrc:,
                                name:,
                                address:,
                                city:,
                                state:,
                                zipCode:,
                                category:,
                                rating:,
                                reviewCount:,
                            },
                            console.log(jsonResponse.businesses)
                        });
            }
        });
    }
}