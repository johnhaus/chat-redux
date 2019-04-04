import { FETCH_MESSAGES, MESSAGE_POSTED, CHANNEL_SELCTED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    case MESSAGE_POSTED: {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    case CHANNEL_SELCTED: {
      return [];
    }
    default:
      return state;
  }
}
