import * as types from "../constants/ActionTypes";
export const onUserPageButtonAction = pk => ({
  type: types.USERSPAGE_BUTTON_ACTION,
  pk
});
// export const onPropPageButtonAction = (prop) => ()

export function onPropPageButtonAction(prop, value) {
  return { type: types.PROPSPAGE_BUTTON_ACTION, prop };
}

export const pageNumberChange = (
  pageNumber: number,
  table: string
): PageNumberChangeAction => ({
  type: types.PAGE_NUMBER_CHANGE,
  payload: pageNumber,
  meta: { table }
});
