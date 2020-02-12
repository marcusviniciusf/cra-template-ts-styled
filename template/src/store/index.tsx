import React, { Reducer, useReducer, createContext, useContext } from 'react';
// Interfaces
import { StoreInterfaces } from 'interfaces';
// Reducer
import reducer, { INITIAL_STATE } from './reducer';

function createCtx<A>() {
  const ctx = createContext<A | undefined>(undefined);
  function useStore() {
    const c = useContext(ctx);
    if (!c) throw new Error('useStore must be inside a Provider with a value');
    return c;
  }
  return [useStore, ctx.Provider] as const;
}

const [useStore, Provider] = createCtx<StoreInterfaces.StoreContext>();

const StoreProvider: React.FC = props => {
  const { children } = props;
  const [state, dispatch] = useReducer<
    Reducer<StoreInterfaces.StoreState, StoreInterfaces.Action>
  >(reducer, INITIAL_STATE);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { useStore };
export default StoreProvider;
