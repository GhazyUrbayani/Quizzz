import axios from 'axios';

export const fetchQuestions = async (amount = 10) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&type=multiple`;

  const maxRetries = 5;
  let retryCount = 0;

  while (retryCount < maxRetries) {
    try {
      const response = await axios.get(url);
      return response.data.results;
    } catch (error) {
      if (error.response && error.response.status === 429) {
        retryCount++;
        const delay = Math.pow(2, retryCount) * 1000;
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw error;
      }
    }
  }

  throw new Error('Failed to fetch questions after multiple retries');
};
