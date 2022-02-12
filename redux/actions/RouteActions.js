import ACTION_KEYS from "../../constants/action-keys";

/**
 * Call by the Component to make Login Request
 * @param {*} data
 * @returns
 */
export const SetRoute = (data) => {
  console.log(data);
  return (dispatch) => {
    setTimeout(() => {
      // dispatch(ClearRoute());
    }, 10000);
    dispatch(SetRouteData(data));
  };
};
export const ClearRoute = () => {
  return {
    type: ACTION_KEYS.ROUTE_CLEAR,
  };
};
export const SetRouteData = (data) => {
  console.log(data);
  return {
    type: ACTION_KEYS.ROUTE_PUSH,
    payload: data,
  };
};
