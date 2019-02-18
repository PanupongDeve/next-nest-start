import { Action } from './IReducer';
import { TODO } from '../type';

interface HelloState {
    data: string
}

const intialState: HelloState = {
    data: 'Hello, My First React and first store from redux'
}

export default function(state: HelloState = intialState, action: Action) {
  switch (action.type) {
    case TODO:
      return {
        ...state,
        data: action.value,
      };
    default:
      return state;
  }
}
