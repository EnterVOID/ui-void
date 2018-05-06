import _ from 'lodash';
import { GET_CHARACTERS } from '../actions/characters';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        total: action.payload.total,
        list: _.mapKeys(action.payload.data, 'id')
      }
    default:
      return state;
  }
}
