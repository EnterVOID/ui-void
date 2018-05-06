import axios from 'axios';

export const GET_CHARACTERS = 'get_characters';

const ROOT_URL = 'https://api.entervoid.com';

export function getCharacters(pageNum) {
  const request = axios.get(`${ROOT_URL}/characters?page=${pageNum}`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({
        type: GET_CHARACTERS,
        payload: data
      });
    });
  }
}
