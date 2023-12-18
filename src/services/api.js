import axios from 'axios';

async function getImages(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const res = await axios(BASE_URL, {
    params: {
      key: '38889342-5ce4404b11b66a6cbf3138ed8',
      orientation: 'horizontal',
      per_page: 12,
      image_type: 'photo',
      q: query,
      page: page,
    },
  });
  return res.data;
}

export default getImages;
