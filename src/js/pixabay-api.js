const API_URL = 'https://pixabay.com/api/';
const API_KEY = '45783365-0aa71d87ed7f50a45516fb3bf';

export const fetchPhotos = searchQuery => {
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 30,
  });

  return fetch(`${API_URL}?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};