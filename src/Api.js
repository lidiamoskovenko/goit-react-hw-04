import axios from 'axios';
const API_URL = "https://api.unsplash.com/search/photos/";
const API_KEY = "TVCb1gVck1LXa8sll6kITrwxeWAWyOC0K_hztjjaF54";

 const fetchImages = async (query, page) => {
  const response = await axios.get(API_URL, {
    params: { query, client_id: API_KEY, page, per_page: 20 },
  });
  console.log(response.data);
  return response.data;
};
export default fetchImages;