const apiUrl = 'http://localhost:5000/api';

const getProducts = async () => {
  const response = await fetch(`${apiUrl}/products`);
  const data = await response.json();
  return data;
};

const apiService = {
  getProducts,
};

export default apiService;
