const apiKey = 'MwKeMvCJh7wsBof6HhrENPGDP1bJVERA6mSMtK2PZk1nx5nSOhMo0Q7Gc2iBxikq-_m0D_uvm7J5ASc7AKzpk7EwOKp6jLEZZHthoHxEVqAa_6C-pvGzLMJN6pCiWnYx';

export default {
  search: (term, location, sortBy) => 
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
      { headers: { Authorization: `Bearer ${apiKey}` } },
    )
    .then(response => response.json())
    .then(
      ({ businesses }) => {
        if (!businesses) return []
        return businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
          })
        );
      }
    )
}
