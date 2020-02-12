import { Reducer } from 'react';
import { TYPES } from './actions';
import { StoreInterfaces } from 'interfaces';

export const INITIAL_STATE: StoreInterfaces.StoreState = {
  loading: false,
};

const reducer: Reducer<StoreInterfaces.StoreState, StoreInterfaces.Action> = (
  state,
  action
) => {
  const { type } = action;
  switch (type) {
    case TYPES.LOADING_ON:
      return { ...state, loading: true };
    case TYPES.LOADING_OFF:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
