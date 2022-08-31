const URL = 'https://economia.awesomeapi.com.br/json/all';

const apiData = async () => {
  try {
    const response = await fetch(URL);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default apiData;
