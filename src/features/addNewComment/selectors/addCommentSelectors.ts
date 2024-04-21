import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentError = (state: StateSchema) => {
  return state.AddCommentFormSchema?.error;
};

export const getAddCommentText = (state: StateSchema) => {
  return state.AddCommentFormSchema?.text;
};
