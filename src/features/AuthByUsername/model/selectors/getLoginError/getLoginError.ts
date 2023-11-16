import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginErrorState = (state: StateSchema) => state?.loginForm?.error;
