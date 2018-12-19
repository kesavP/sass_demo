export const USERSPAGE_BUTTON_ACTION = 'users-page-button-click';
export const PROPSPAGE_BUTTON_ACTION = 'props-page-button-click';
export const PAGE_NUMBER_CHANGE = 'page-number-change';

export type Action = {
    type: string,
    payload: any,
    meta: { table: string },
    error?: any,
  };