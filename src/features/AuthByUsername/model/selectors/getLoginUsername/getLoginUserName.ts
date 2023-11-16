import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginUsernameState = (state: StateSchema) => state?.loginForm?.username;
