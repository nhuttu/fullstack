import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  console.log(response.data, "asdd");
  return response.data;
};
const updateVote = async (id, updatedAnecdote) => {
  console.log(id, updatedAnecdote);
  const response = await axios.put(`${baseUrl}/${id}`, updatedAnecdote);
  return response.data;
};

export default { getAll, updateVote };
