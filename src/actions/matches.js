import axios from 'axios';

export const GET_MATCHES = 'get_matches';
export const GET_MATCH = 'get_one_match';
export const BUILD_CURRENT = 'build_current_matches';

const ROOT_URL = 'https://api.entervoid.com';

export function getMatches(pageNum) {
  const request = axios.get(`${ROOT_URL}/matches?order[due_date]=desc&page=${pageNum}`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({
        type: GET_MATCHES,
        payload: data
      });
    });
  }
}

export function getSingleMatch(id) {
  const request = axios.get(`${ROOT_URL}/matches/${id}`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({
        type: GET_MATCH,
        payload: data
      });
    });
  }
}

export function buildCurrentLineUp() {
  const request = axios.get(`${ROOT_URL}/matches/home`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({
        type: BUILD_CURRENT,
        payload: data
      });
    });
  }
}
