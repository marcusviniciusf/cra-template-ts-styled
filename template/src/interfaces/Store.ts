import { Dispatch } from 'react';
import { TYPES } from 'store/actions';

export interface StoreState {
  loading: boolean;
}

export interface Action {
  type: TYPES;
  payload?: any;
}

export interface ActionDispatch {
  state?: StoreState;
  dispatch: Dispatch<Action>;
}

export interface StoreContext {
  state: StoreState;
  dispatch: Dispatch<Action>;
}

// Actions
export interface Actions {
  handleLoadingOn(): void;
  handleLoadingOff(): void;
}
