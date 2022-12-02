import axios from 'axios';

const LOCALHOST = 'http://localhost:8082/';

export async function createUserRequest() {
  const response = await axios.get(LOCALHOST + 'create/');
  return response.data;
}

