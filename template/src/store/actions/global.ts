import { StoreInterfaces } from 'interfaces';
import { TYPES } from './types';

export default ({
  dispatch,
}: StoreInterfaces.ActionDispatch): StoreInterfaces.Actions => ({
  handleLoadingOn: () => {
    dispatch({
      type: TYPES.LOADING_ON,
    });
  },
  handleLoadingOff: () => {
    dispatch({
      type: TYPES.LOADING_OFF,
    });
  },
});
