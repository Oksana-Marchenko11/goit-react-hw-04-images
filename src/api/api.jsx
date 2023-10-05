import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getItems = async ({ searchName, currentPage }) => {
  const response = await axios.get(axios.defaults.baseURL, {
    params: {
      q: searchName,
      per_page: 12,
      page: currentPage,
      key: '38733700-96318c553c84bf90463eb3752',
    },
  });
  return response;
};
