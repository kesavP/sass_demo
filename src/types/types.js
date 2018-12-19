export type Action = {
    type: string,
    payload: any,
    meta: { table: string },
    error?: any,
  };