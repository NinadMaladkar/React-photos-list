import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID nxK3C7h-YjJbNpimMdEy9S9RCJdzfH4GJOb8qbaP0Dw',
  },
});
