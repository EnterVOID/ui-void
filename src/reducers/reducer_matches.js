import _ from 'lodash';
import { GET_MATCHES, BUILD_CURRENT } from '../actions/matches';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_MATCHES:
      return {
        total: action.payload.total,
        list: _.mapKeys(action.payload.data, 'id')
      }
    case BUILD_CURRENT:
    return {
      voting: {
        title: 'Comics To Vote On',
        results: !Array.isArray(action.payload.Voting) || !action.payload.Voting.length ? null : _.mapKeys(action.payload.Voting, 'id')
      },
      drawing: {
        title: 'Comics Being Drawn',
        results: !Array.isArray(action.payload.Drawing) || !action.payload.Drawing.length ? null : _.mapKeys(action.payload.Drawing, 'id')
      },
      complete: {
        title: 'Recently Completed Comics',
        results: !Array.isArray(action.payload.Complete) || !action.payload.Complete.length ? null : _.mapKeys(action.payload.Complete, 'id')
      }
    }
    default:
      return state;
  }
}
