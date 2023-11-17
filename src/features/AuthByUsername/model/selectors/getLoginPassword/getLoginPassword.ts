import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginPasswordState = (state: StateSchema) => state?.loginForm?.password || '';
